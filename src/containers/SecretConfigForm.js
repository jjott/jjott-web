import React from 'react'
import { connect } from 'react-redux'
import { Control, Form, actions } from 'react-redux-form'
import { TextField } from 'material-ui'
import { grey800 as grayColor } from 'material-ui/styles/colors'
import styled from 'styled-components'
import validator from 'validator'
import bip39 from 'bip39'
import _ from 'lodash'

const SHARE_COUNT_MIN = 2
const SHARE_COUNT_MAX = 6
const SECRET_NAME_LEN_MAX = 48

const StyledForm = styled(Form)`
  width: 100%;
  margin-bottom: 50px;
`;
const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-content: flex-start;
`;
const FormPane = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  margin-right: 35px;
  margin-top: 15px;
  max-width: 450px;
  flex: 1 100%;
`;

const _validatePhrase = (phrase) => {
  if (phrase.trim().split(/\s+/g).length < 12) {
    return false
  }
  return bip39.validateMnemonic(phrase.trim())
}

const _errorStringForModelErrorKey = (model, errorKey) => {
  var errors = {
    "form.secretConfig.name" : {
      length: `Name must not be longer than ${SECRET_NAME_LEN_MAX}.`,
    },
    "form.secretConfig.threshold" : {
      minSize: `Must be at least ${SHARE_COUNT_MIN}.`,
    },
    "form.secretConfig.shareCount" : {
      validCount: `Must be between ${SHARE_COUNT_MIN} and ${SHARE_COUNT_MAX} shares.`,
    },
    "form.secretConfig.phrase" : {
      validPhrase: 'Invalid seed phrase, please check.'
    },
  }
  var modelErrors = _.get(errors, model, {})
  return _.get(modelErrors, errorKey, "")
}

const CustomControl = (props) => {
  var errors = _.pickBy(props.form_model.errors, (valid, errorKey) => {return valid})
  var errorStrings = _.map(errors, (valid, errorKey) => {
    return _errorStringForModelErrorKey(props.model, errorKey)
  })
  var singleErrorString = errorStrings.pop()
  return (
    <Control
      {...props}
      underlineStyle={{borderColor: grayColor}}
      floatingLabelStyle={{
        color: grayColor,
        fontSize: "1.3rem"
      }}
      floatingLabelFixed={true}
      errorText={singleErrorString}
      style={{
        width: "100%",
      }}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    secretConfig: state.form.secretConfig,
    secretConfigForm: state.form.forms.secretConfig,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateThreshold: (threshold) => {
      dispatch(actions.change("form.secretConfig.threshold", threshold))
    }
  }
}

class SecretConfigFormContainer extends React.Component {
  _handleFormChange({ threshold, shareCount }) {
    // Update threshold to match shareCount
    var newThreshold = Math.min(SHARE_COUNT_MAX, threshold, shareCount)
    this.props.updateThreshold(`${newThreshold}`)
  }

  render() {
    return (
      <StyledForm
        model="form.secretConfig"
        onChange={(secretConfig) => this._handleFormChange(secretConfig)}
      >
        <Container>
          <FormPane>
            <CustomControl
              form_model={this.props.secretConfigForm.name}
              model="form.secretConfig.name"
              component={TextField}
              id="form.secretConfig.name"
              floatingLabelText='Give your secret a name (optional)'
              multiLine={true}
              validators={{
                length: (val) => val ? val.length < SECRET_NAME_LEN_MAX : true
              }}
            />
            <CustomControl
              form_model={this.props.secretConfigForm.phrase}
              model="form.secretConfig.phrase"
              component={TextField}
              id="form.secretConfig.phrase"
              floatingLabelText="Enter your seed phrase"
              multiLine={true}
              validators={{
                validPhrase: (val) => _validatePhrase(val)
              }}
            />
          </FormPane>
          <FormPane>
            <CustomControl
              form_model={this.props.secretConfigForm.shareCount}
              model="form.secretConfig.shareCount"
              component={TextField}
              id="form.secretConfig.shareCount"
              floatingLabelText='Split seed phrase into number of shares'
              defaultValue={`${this.props.secretConfig.shareCount}`}
              validators={{
                validCount: (val) => validator.isInt(val) && val >= SHARE_COUNT_MIN && val <= SHARE_COUNT_MAX
              }}
            />
            <CustomControl
              form_model={this.props.secretConfigForm.threshold}
              model="form.secretConfig.threshold"
              component={TextField}
              id="form.secretConfig.threshold"
              floatingLabelText='Shares needed for recovery'
              defaultValue={`${this.props.secretConfig.threshold}`}
              validators={{
                minSize: (val) => validator.isInt(val) && val >= SHARE_COUNT_MIN,
              }}
            />
          </FormPane>
        </Container>
      </StyledForm>
    );
  }
}

const SecretConfigForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SecretConfigFormContainer)

export default SecretConfigForm
