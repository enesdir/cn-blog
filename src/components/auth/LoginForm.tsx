import * as Yup from 'yup'

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { UserLoginMutation, UserLoginMutationVariables } from '@graphql/generated'

import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import InputBuilder from '@app/components/common/InputBuilder'
import Link from '@app/components/common/Link'
import Paper from '@material-ui/core/Paper'
import PersonIcon from '@material-ui/icons/Person'
import React from 'react'
import Switch from '@material-ui/core/Switch'
import Typography from '@material-ui/core/Typography'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import { useAuthDispatch } from '@app/contexts/authContext'
import { useFormik } from 'formik'
import { useMutation } from '@apollo/client'
import { userLoginMutation } from '@graphql/auth/mutation/userLogin'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    submitButton: {
      margin: `${theme.spacing(4)}px 0`,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    loginHead: {
      marginBottom: theme.spacing(2),
      textAlign: 'center',
      paddingTop: '3%',
    },

    loginButton: {
      marginTop: theme.spacing(2),
    },
    helpMessage: {
      marginTop: theme.spacing(2),
    },
  })
)

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
})
interface LoginState {
  keepLoggedIn: boolean
  password: string
  showPassword: boolean
}
function LoginForm() {
  const [userLogin, { error, client }] = useMutation<UserLoginMutation, UserLoginMutationVariables>(
    userLoginMutation
  )
  const { signIn } = useAuthDispatch()
  const classes = useStyles()
  const [state, setState] = React.useState<LoginState>({
    password: '',
    showPassword: false,
    keepLoggedIn: false,
  })
  const form = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      email: '',
      password: '',
    },
    initialErrors: {
      email: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      actions.setSubmitting(true)
      try {
        await client.resetStore()
        const res: { data?: any } = await userLogin({
          variables: {
            ...values,
          },
        })
        if (res && res.data.userLogin) {
          const token = res.data?.userLogin.token ?? null
          signIn(token)
        }
      } catch (error) {
        actions.resetForm()
        console.log(error.message)
      }
      actions.setSubmitting(false)
    },
  })
  const handleCheckbox = event => {
    setState(state => ({ ...state, keepLoggedIn: event.target.checked }))
  }
  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const handleClickShowPasssword = () => {
    setState(state => ({
      ...state,
      showPassword: !state.showPassword,
    }))
  }
  const keepLoggedInSwitch = (
    <Switch checked={state.keepLoggedIn} onChange={handleCheckbox} value="keepLoggedIn" />
  )
  const showProfileAdornment = <PersonIcon style={{ marginRight: '10' }} />
  const showPasswordAdornment = (
    <IconButton
      style={{ width: 'auto' }}
      onClick={handleClickShowPasssword}
      onMouseDown={handleMouseDownPassword}
    >
      {state.showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  )
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.loginHead} variant="h5">
        Login
      </Typography>
      <Divider />
      <form onSubmit={form.handleSubmit}>
        <FormControl disabled={form.isSubmitting} fullWidth margin="normal" variant="outlined">
          <InputBuilder
            elementType="input"
            key="email"
            changed={form.handleChange}
            touched={form.touched.email}
            elementConfig={{
              id: 'email',
              name: 'email',
              // error: form.touched.email && form.errors.email,
              autoComplete: 'email',
              type: 'email',
              value: form.values.email,
              placeholder: 'Enter Your E-mail Address',
              label: 'E-Mail Address',
              variant: 'outlined',
            }}
            inputAdornment={{
              endAdornment: {
                position: 'end',
                value: showProfileAdornment,
              },
            }}
          />
        </FormControl>
        <FormControl disabled={form.isSubmitting} fullWidth margin="normal" variant="outlined">
          <InputBuilder
            elementType="input"
            key="password"
            changed={form.handleChange}
            touched={form.touched.password}
            elementConfig={{
              // error: form.touched.password && form.errors.password,
              id: 'password',
              name: 'password',
              autoComplete: 'password',
              type: state.showPassword ? 'text' : 'password',
              value: form.values.password,
              placeholder: 'Enter Your Password',
              label: 'Password',
              variant: 'outlined',
            }}
            inputAdornment={{
              endAdornment: {
                position: 'end',
                value: showPasswordAdornment,
              },
            }}
          />
        </FormControl>
        <FormGroup row>
          <FormControlLabel control={keepLoggedInSwitch} label="Remember Me" />
        </FormGroup>
        {error && (
          <Typography variant="caption" color="error">
            {error.message}
          </Typography>
        )}
        <Button
          disabled={!form.isValid || form.isSubmitting}
          className={classes.loginButton}
          fullWidth
          type="submit"
          aria-label="Enter"
          variant="contained"
          color="secondary"
          size="large"
        >
          Login
        </Button>
      </form>
      <Grid container>
        <Grid item xs>
          <Typography className={classes.helpMessage} variant="caption" align="center">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.helpMessage} variant="caption" align="center">
            <Link href="/auth/register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default LoginForm
