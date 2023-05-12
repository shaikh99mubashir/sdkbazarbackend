const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { authService, userService, tokenService, emailService } = require('../services');
const BusinessStep01 = require('../models/BusinessStep1')
const BusinessStep02 = require('../models/BusinessStep2')
const businessprofileimage = require('../models/BusinessProfileImage')
const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const businessstep01 = catchAsync(async (req, res) => {
  // const { company_name, business_category, company_registration_number, tax_identifier, license_Type, company_description } = req.body
  // let flag = Object.values(req.body);
  // console.log('req', req);
  // console.log('req body', req.body);
  // console.log('req file', req.file);
  // let flag2 = flag.some((e, i) => e == '');
  // if (flag2) {
  //   return
  // }

  let { id } = req.body

  console.log(req.body)
  console.log(id, "id")

  BusinessStep01.findByIdAndUpdate(id, req.body, (error, data) => {
    if (error) {
      res.json(
        {
          status: false,
          message: 'internal server error'
        }
      )
    }
    else {
      res.json(
        {
          data: data,
          status: true,
          message: 'Data send success fullly'
        }
      )
    }
  })

});
const businessstep02 = catchAsync(async (req, res) => {

  let { id } = req.body

  let flag = Object.values(req.body);
  console.log('req', req);
  console.log('req body', req.body);
  let flag2 = flag.some((e, i) => e == '');
  if (flag2) {
    return
  }
  BusinessStep01.findByIdAndUpdate(id, { new: true }, req.body, (error, data) => {
    if (error) {
      res.json(
        {
          status: false,
          message: 'internal server error'
        }
      )
    }
    else {
      res.json(
        {
          data: data,
          status: true,
          message: 'Data send success fullly'
        }
      )
    }
  })

});

// Handle image upload request
const BusinessProfileImage = catchAsync(async (req, res) => {


  console.log(req, "request")

  res.status(200).json({ image: req.file.filename })

});





const logout = catchAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const refreshTokens = catchAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

const forgotPassword = catchAsync(async (req, res) => {
  const resetPasswordToken = await tokenService.generateResetPasswordToken(req.body.email);
  await emailService.sendResetPasswordEmail(req.body.email, resetPasswordToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req, res) => {
  await authService.resetPassword(req.query.token, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const sendVerificationEmail = catchAsync(async (req, res) => {
  const verifyEmailToken = await tokenService.generateVerifyEmailToken(req.user);
  await emailService.sendVerificationEmail(req.user.email, verifyEmailToken);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyEmail = catchAsync(async (req, res) => {
  await authService.verifyEmail(req.query.token);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  sendVerificationEmail,
  verifyEmail,
  businessstep01,
  businessstep02,
  BusinessProfileImage,
};
