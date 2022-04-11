import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { RadioForm, RadioOption } from './form-input/RadioForm';
import { ThisOrThatForm, ThisOrThatOption } from './form-input/ThisOrThatForm';

// eslint-disable-next-line
const image = 'https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcases-17.0f2b1794.jpg&w=640&q=75';
export default function Q1({ item }) {
  return (
    <div>
      <Typography variant="h4">
        Hi! I'm a Question and I have lots of thoughts
      </Typography>
      <RadioForm title="look another form!" item={item} fieldName="email">
        <RadioOption value="1" label="I'm an option wow!!" />
        <RadioOption value="2" label="I'm another option wow!!" />
        <RadioOption value="3" label="ethics is very important" />
      </RadioForm>
      <ThisOrThatForm
        title="This is a title! Say something like Choose which one is better"
        item={item}
        fieldName="q1"
      >
        <ThisOrThatOption>
          Here is a this or that option!! Here is a this or that option!! Here
          is a this or that option!!
        </ThisOrThatOption>
        <ThisOrThatOption>
          <Image
            loader={() => image}
            src="me.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </ThisOrThatOption>
      </ThisOrThatForm>

      <ThisOrThatForm title="This one is only text" item={item} fieldName="q11">
        <ThisOrThatOption>
          Here is a this or that option!! Here is a this or that option!! Here
          is a this or that option!!
        </ThisOrThatOption>
        <ThisOrThatOption>
          Wow this is another option!!! Here is a this or that option!! Here is
          a this or that option!! Here is a this or that option!!
        </ThisOrThatOption>
      </ThisOrThatForm>

      <ThisOrThatForm
        title="This one is only images"
        item={item}
        fieldName="q111"
      >
        <ThisOrThatOption>
          <Image
            loader={() => image}
            src="me.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </ThisOrThatOption>
        <ThisOrThatOption>
          <Image
            loader={() => image}
            src="me.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </ThisOrThatOption>
      </ThisOrThatForm>
    </div>
  );
}
