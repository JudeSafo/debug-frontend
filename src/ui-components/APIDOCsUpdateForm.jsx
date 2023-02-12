/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { APIDOCs } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function APIDOCsUpdateForm(props) {
  const {
    id: idProp,
    aPIDOCs,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const { tokens } = useTheme();
  const initialValues = {
    context: "",
    prompt: "",
  };
  const [context, setContext] = React.useState(initialValues.context);
  const [prompt, setPrompt] = React.useState(initialValues.prompt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = aPIDOCsRecord
      ? { ...initialValues, ...aPIDOCsRecord }
      : initialValues;
    setContext(cleanValues.context);
    setPrompt(cleanValues.prompt);
    setErrors({});
  };
  const [aPIDOCsRecord, setAPIDOCsRecord] = React.useState(aPIDOCs);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(APIDOCs, idProp) : aPIDOCs;
      setAPIDOCsRecord(record);
    };
    queryData();
  }, [idProp, aPIDOCs]);
  React.useEffect(resetStateValues, [aPIDOCsRecord]);
  const validations = {
    context: [],
    prompt: [
      { type: "Required" },
      {
        type: "LessThanChar",
        numValues: [30],
        validationMessage: "The value must be 30 words characters or fewer",
      },
    ],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap={tokens.space.large.value}
      columnGap={tokens.space.large.value}
      padding={tokens.space.medium.value}
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          context,
          prompt,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            APIDOCs.copyOf(aPIDOCsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "APIDOCsUpdateForm")}
      {...rest}
    >
      <Heading
        level={3}
        children="OpenManual"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement00")}
      ></Divider>
      <TextField
        label="Interactive documentation, Customized to your API, Embeddable as a widget"
        descriptiveText="Enter`url` or `text`"
        isRequired={false}
        isReadOnly={false}
        placeholder="https://docs.python.org/3/library/re.html"
        value={context}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              context: value,
              prompt,
            };
            const result = onChange(modelFields);
            value = result?.context ?? value;
          }
          if (errors.context?.hasError) {
            runValidationTasks("context", value);
          }
          setContext(value);
        }}
        onBlur={() => runValidationTasks("context", context)}
        errorMessage={errors.context?.errorMessage}
        hasError={errors.context?.hasError}
        {...getOverrideProps(overrides, "context")}
      ></TextField>
      <TextField
        label="Question"
        isRequired={true}
        isReadOnly={false}
        placeholder="(e.g. Write a regex to parse a phone numbers?)"
        value={prompt}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              context,
              prompt: value,
            };
            const result = onChange(modelFields);
            value = result?.prompt ?? value;
          }
          if (errors.prompt?.hasError) {
            runValidationTasks("prompt", value);
          }
          setPrompt(value);
        }}
        onBlur={() => runValidationTasks("prompt", prompt)}
        errorMessage={errors.prompt?.errorMessage}
        hasError={errors.prompt?.hasError}
        {...getOverrideProps(overrides, "prompt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || aPIDOCs)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap={tokens.space.large.value}
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || aPIDOCs) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
