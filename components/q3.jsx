import React from 'react';
import Typography from '@mui/material/Typography';
import {
  MultiSelectForm,
  MultiSelectOption,
} from './form-input/MultiSelectForm';

export default function Q3({ item }) {
  return (
    <div>
      <Typography variant="h4">This a third question!! </Typography>
      <MultiSelectForm title="look another form!" item={item} fieldName="q3">
        <MultiSelectOption value="3" label="ethics is very important" />
        <MultiSelectOption value="1" label="I'm an option wow!!" />
        <MultiSelectOption value="2" label="I'm another option wow!!" />
      </MultiSelectForm>
    </div>
  );
}
