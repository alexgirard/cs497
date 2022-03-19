import React from 'react';
import Image from 'next/image';
import { ThisOrThatForm, ThisOrThatOption } from './form-input/ThisOrThatForm';

// eslint-disable-next-line
const image = 'https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcases-17.0f2b1794.jpg&w=640&q=75';
export default function Q1() {
  return (
    <div>
      <h1>Hi! I'm a Question and I have lots of thoughts</h1>
      <ThisOrThatForm title="This is a title! Say something like Choose which one is better">
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

      <ThisOrThatForm title="This one is only text">
        <ThisOrThatOption>
          Here is a this or that option!! Here is a this or that option!! Here
          is a this or that option!!
        </ThisOrThatOption>
        <ThisOrThatOption>
          Wow this is another option!!! Here is a this or that option!! Here is
          a this or that option!! Here is a this or that option!!
        </ThisOrThatOption>
      </ThisOrThatForm>

      <ThisOrThatForm title="This one is only images">
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
