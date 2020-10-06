import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'

import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Grid from '@material-ui/core/Grid'
import HelpOutline from '@material-ui/icons/Help'
import InputAdornment from '@material-ui/core/InputAdornment'
import MenuItem from '@material-ui/core/MenuItem'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import React from 'react'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cursor: {
      cursor: 'pointer',
      opacity: 1,
    },
    helpIcon: {
      fontSize: 21,
    },
    htmlTooltip: {
      fontSize: '14vh',
      boxShadow: theme.shadows[1],
      border: '1px solid #dadde9',
      borderRadius: '3px',
    },
  })
)
// fix: should be adding advanced type definition.
// interface optionsConfigProps {
//   configs: RadioGroupProps | RadioProps
// }
// interface OptionType extends FormControlLabelProps {
//   value?: string
//   displayValue?: string
// }
// interface miscellaneousConfigProps {
//   options?: OptionType[]
//   configs?: optionsConfigProps
// }
// interface elementConfigProps extends BaseTextFieldProps  {
//   elementConfig?: StandardTextFieldProps | miscellaneousConfigProps
// }

interface InputBuilderProps {
  elementType: 'input' | 'textarea' | 'radio' | 'select'
  errorValue?: boolean
  touched?: boolean
  value?: any
  inputAdornment?: any
  changed?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  elementConfig: any
}
const InputBuilder = (props: InputBuilderProps) => {
  const classes = useStyles()
  let inputElement = null
  let startAdornment = null
  let endAdornment = null

  if (props.inputAdornment) {
    startAdornment = props.inputAdornment.startAdornment ? (
      <InputAdornment position="start">{props.inputAdornment.startAdornment.value}</InputAdornment>
    ) : null

    endAdornment = props.inputAdornment.endAdornment ? (
      props.inputAdornment.endAdornment.helptooltip ? (
        <Tooltip
          className={classes.cursor}
          classes={{
            tooltip: classes.htmlTooltip,
          }}
          title={<Typography>{props.inputAdornment.endAdornment.helptooltip}</Typography>}
        >
          <InputAdornment position="end">
            <HelpOutline className={classes.helpIcon} />
          </InputAdornment>
        </Tooltip>
      ) : (
        <InputAdornment position="end">{props.inputAdornment.endAdornment.value}</InputAdornment>
      )
    ) : null
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <TextField
          fullWidth
          error={props.errorValue === false && props.touched !== false}
          onChange={props.changed}
          {...props.elementConfig}
          InputProps={{
            startAdornment: startAdornment,
            endAdornment: endAdornment,
          }}
        />
      )
      break
    case 'textarea':
      inputElement = (
        <TextField
          fullWidth
          multiline={true}
          rows={3}
          rowsMax={4}
          error={props.errorValue === false && props.touched !== false}
          onChange={props.changed}
          {...props.elementConfig}
          InputProps={{
            startAdornment: startAdornment,
            endAdornment: endAdornment,
          }}
        />
      )
      break
    case 'select':
      inputElement = (
        <TextField
          select
          fullWidth
          value={props.value}
          {...props.elementConfig.configs}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.displayValue}
            </MenuItem>
          ))}
        </TextField>
      )
      break
    case 'radio':
      inputElement = (
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ paddingTop: '8px', marginLeft: '2px' }}>
            <Typography component="h5" variant="subtitle1">
              {props.elementConfig.configs.label}
            </Typography>
          </FormLabel>
          <RadioGroup
            {...props.elementConfig.configs}
            onChange={props.changed}
            value={props.value}
            row
          >
            {props.elementConfig.options.map(option => (
              <FormControlLabel
                key={option.value}
                {...option}
                control={<Radio color={props.elementConfig.configs.color} />}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )
      break
    default:
      inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />
  }

  return (
    <Grid item xs={12} md={12} lg={12}>
      {inputElement}
    </Grid>
  )
}

export default InputBuilder
