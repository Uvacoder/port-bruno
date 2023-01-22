/**
 * MIT License
 *
 * Copyright (c) 2023, Brion Mario.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {css, SerializedStyles} from '@emotion/react';
import cx from 'clsx';

const useStyles = (): {
  classes: {
    extra: string;
    root: string;
    stack: string;
  };
  css: SerializedStyles;
  cx: typeof cx;
} => ({
  classes: {
    extra:
      'flex items-center justify-center w-6 h-6 text-xs text-[8px] text-white bg-gray-500 border-2 border-white rounded-full dark:border-gray-800',
    root: 'MarioUI-AvatarGroup-root flex hover:-space-x-0',
    stack: '-space-x-4',
  },
  css: css`
    .MarioUI-AvatarGroup-root {
    }
  `,
  cx,
});

export default useStyles;
