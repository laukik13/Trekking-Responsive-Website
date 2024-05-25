import { User } from "../Models/user.model.js";
import { ApiError } from "../Utils/ApiError.js";
import { ApiResponse } from "../Utils/ApiResponse.js";
import { asyncHandler } from "../Utils/catchAsyncHandler.js";

const generateAccessandRefreshToken = async (userId) => {
  //check user from parameter
  //generate access token from user
  //generate refresh token from user
  //set refresh token to database
  //return access token and refresh token

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new ApiError(400, "User Not Found");
    }

    const accessToken = user.generateAccessToken();

    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while genrating access anf refresh token"
    );
  }
};

const registerUser = asyncHandler(async (req, res) => {
  //get field from user
  //check field empty
  //check user Already there
  //send data to database
  //return res

  const { username, firstName, lastName, email, password } = req.body;

  if (
    [username, firstName, lastName, email, password].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields Are Empty");
  }

  const userExists = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (userExists) {
    throw new ApiError(400, "Email or Username Already Exists");
  }

  const user = await User.create({
    username: username.toLowerCase(),
    firstName,
    lastName,
    email,
    password,
  });

  if (!user) {
    throw new ApiError(400, "Something Went Wrong While Registering User");
  }

  return res
    .status(200)
    .json(new ApiResponse(201, user, "User Register Success"));
});

const loginUser = asyncHandler(async (req, res) => {
  //get username or email / password from user
  //check fields are empty or not
  //check user in database
  //check password
  //generate access and refresh token
  //return res

  const { email, username, password } = req.body;

  if (!username && !email) {
    throw new ApiError(400, "Username or Email Required");
  }

  const user = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (!user) {
    throw new ApiError(400, "User not Found");
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Password is invalid");
  }

  const { accessToken, refreshToken } = await generateAccessandRefreshToken(
    user._id
  );

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!loggedInUser) {
    throw new ApiError(400, "Something Went Wrong While get User");
  }

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "User Logged In success"
      )
    );
});

export { registerUser, loginUser };
