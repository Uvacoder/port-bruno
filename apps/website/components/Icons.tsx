/**
 * MIT License
 *
 * Copyright (c) 2023, Brion Mario
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

import {ComponentProps, SVGProps} from 'react';

// eslint-disable-next-line no-unused-vars
export type IconType = ((props: ComponentProps<'svg'>) => JSX.Element) & {
  requiresFill?: boolean;
};

export const TailwindIcon: IconType = props => (
  <svg width="30" height="18" viewBox="0 0 30 18" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 0c-4 0-6.5 2-7.5 6 1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C17.08 7.271 18.782 9 22.5 9c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C20.42 1.728 18.718 0 15 0ZM7.5 9C3.5 9 1 11 0 15c1.5-2 3.25-2.75 5.25-2.25 1.141.285 1.957 1.113 2.86 2.03C9.58 16.271 11.282 18 15 18c4 0 6.5-2 7.5-6-1.5 2-3.25 2.75-5.25 2.25-1.141-.285-1.957-1.113-2.86-2.03C12.92 10.729 11.218 9 7.5 9Z"
    />
  </svg>
);

export const GitHubIcon: IconType = ({height = 28, ...rest}: SVGProps<SVGSVGElement>) => (
  <svg height={height} viewBox="2 2 20 20" fill="currentColor" aria-hidden="true" {...rest}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"
    />
  </svg>
);

// TODO: Fix Types
// eslint-disable-next-line no-unused-vars
export const DockerIcon: IconType = ({height = 28, ...rest}: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 122.88 88.17" height={height} {...rest}>
    <g>
      <path
        fill="transparent"
        strokeWidth={6}
        d="M121.68,33.34c-0.34-0.28-3.42-2.62-10.03-2.62c-1.71,0-3.48,0.17-5.19,0.46c-1.25-8.72-8.49-12.94-8.78-13.16 l-1.77-1.03l-1.14,1.65c-1.42,2.22-2.51,4.73-3.13,7.29c-1.2,4.96-0.46,9.63,2.05,13.62c-3.02,1.71-7.92,2.11-8.95,2.17l-80.93,0 c-2.11,0-3.82,1.71-3.82,3.82c-0.11,7.07,1.08,14.13,3.53,20.8c2.79,7.29,6.95,12.71,12.31,16.01c6.04,3.7,15.9,5.81,27.01,5.81 c5.01,0,10.03-0.46,14.99-1.37c6.9-1.25,13.51-3.65,19.6-7.12c5.02-2.91,9.52-6.61,13.34-10.94c6.44-7.24,10.26-15.33,13.05-22.51 c0.4,0,0.74,0,1.14,0c7.01,0,11.34-2.79,13.73-5.19c1.6-1.48,2.79-3.31,3.65-5.36l0.51-1.48L121.68,33.34L121.68,33.34z M71.59,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69 C70.68,38.98,71.08,39.38,71.59,39.38L71.59,39.38z M56.49,11.63h10.83c0.51,0,0.97-0.4,0.97-0.97V0.97c0-0.51-0.46-0.97-0.97-0.97 L56.49,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C55.52,11.17,55.97,11.63,56.49,11.63L56.49,11.63z M56.49,25.53h10.83 c0.51,0,0.97-0.46,0.97-0.97v-9.69c0-0.51-0.46-0.97-0.97-0.97H56.49c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69 C55.52,25.08,55.97,25.53,56.49,25.53L56.49,25.53z M41.5,25.53h10.83c0.51,0,0.97-0.46,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97 l0,0H41.5c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C40.53,25.08,40.93,25.53,41.5,25.53L41.5,25.53z M26.28,25.53h10.83 c0.51,0,0.97-0.46,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0H26.28c-0.51,0-0.97,0.4-0.97,0.97v9.69 C25.37,25.08,25.77,25.53,26.28,25.53L26.28,25.53z M56.49,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97v-9.69c0-0.51-0.4-0.97-0.97-0.97 l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69C55.52,38.98,55.97,39.38,56.49,39.38L56.49,39.38L56.49,39.38z M41.5,39.38 h10.83c0.51,0,0.97-0.4,0.97-0.97l0,0v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0v9.69 C40.53,38.98,40.93,39.38,41.5,39.38L41.5,39.38L41.5,39.38z M26.28,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97l0,0v-9.69 c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97v9.69C25.37,38.98,25.77,39.38,26.28,39.38L26.28,39.38z M11.35,39.38h10.83c0.51,0,0.97-0.4,0.97-0.97l0,0v-9.69c0-0.51-0.4-0.97-0.97-0.97l0,0l-10.83,0c-0.51,0-0.97,0.4-0.97,0.97l0,0 v9.69C10.44,38.98,10.84,39.38,11.35,39.38L11.35,39.38L11.35,39.38z"
      />
    </g>
  </svg>
);

export const RectangleGroupIcon: IconType = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
    />
  </svg>
);

export const FaceSmileIcon: IconType = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
    />
  </svg>
);

export const RectangleStackIcon: IconType = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
    />
  </svg>
);

export const JSIcon: IconType = props => (
  <svg viewBox="0 0 1024 1024" stroke="currentColor" {...props}>
    <path d="M416 176.002h-160v424.996c0 105.16-36.064 134.522-98.824 134.522-29.41 0-55.896-5.042-76.5-12.126L64 847.808C93.4 857.932 138.518 864 173.814 864 317.91 864 416 796.258 416 602.04V176.002zM764.926 160C610.04 160 512 247.996 512 364.308c0 100.166 75.502 162.88 185.282 203.33 79.4 28.316 110.784 53.616 110.784 95.078 0 45.512-36.278 74.85-104.896 74.85-63.726 0-121.578-21.28-160.788-42.51v-0.042L512 821.454c37.278 21.276 106.882 42.51 182.334 42.51C875.708 863.96 960 766.86 960 652.568c0-97.1-53.916-159.8-170.556-204.326-86.278-34.382-122.54-53.59-122.54-97.084 0-34.4 31.376-65.738 96.086-65.738 63.692 0 107.488 21.414 133.01 34.582l38.25-128C894.25 174.44 840.376 160 764.926 160z" />
  </svg>
);

JSIcon.requiresFill = true;

export const TSIcon: IconType = props => (
  <svg viewBox="0 0 350 350" stroke="currentColor" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M198 228.56V278.56C206.1 282.76 216 285.86 227 287.96C238 290.06 250 291.06 262 291.06C274 291.06 285 289.96 296 287.66C307 285.36 316 281.56 324 276.66C332.1 271.36 339 264.66 343 255.66C347 246.66 350.1 236.66 350.1 223.66C350.1 214.56 348.7 206.66 346 199.66C343.3 192.66 339.4 186.66 334 181.66C328.9 176.36 323 171.66 316 167.66C309 163.66 301 159.46 292 155.66C285.4 152.96 280 150.36 274 147.76C268.8 145.16 264.3 142.56 261 139.96C257.3 137.26 254.5 134.46 252.5 131.56C250.5 128.56 249.5 125.26 249.5 121.56C249.5 118.16 250.39 115.06 252.2 112.26C254.01 109.46 256.5 107.16 259.7 105.16C262.9 103.16 266.9 101.66 271.7 100.56C276.4 99.46 281.6 98.96 287.7 98.96C291.9 98.96 296.3 99.27 300.7 99.9C305.3 100.53 310 101.5 314.7 102.8C319.4 104.1 324 105.7 328.7 107.7C333.1 109.7 337.2 112 340.7 114.6V67.6C333.1 64.7 324.7 62.5 315.7 61.1C306.7 59.7 296.7 59 284.7 59C272.7 59 261.7 60.3 250.7 62.8C239.7 65.3 230.7 69.3 222.7 74.8C214.6 80.2 208.7 86.8 203.7 95.8C199 104.2 196.7 113.8 196.7 125.8C196.7 140.8 201 153.8 209.7 163.8C218.3 174.8 231.7 182.8 248.7 190.8C255.6 193.6 261.7 196.4 267.7 199.1C273.7 201.8 278.7 204.6 282.7 207.5C287 210.4 290.4 213.6 292.7 217C295.2 220.4 296.5 224.4 296.5 229C296.5 232.2 295.72 235.2 294.2 238C292.68 240.8 290.3 243.2 287.1 245.2C283.9 247.2 280 248.8 275.1 250C270.4 251.1 265.1 251.7 258.1 251.7C247.1 251.7 236.1 249.8 226.1 246C215.1 242.2 205.1 236.5 196.1 229L198 228.56ZM114 105.56H178V64.56H-1V105.56H63V288.56H114V105.56Z"
    />
  </svg>
);

TSIcon.requiresFill = true;

export const CSSIcon: IconType = props => (
  <svg viewBox="0 0 470.699 470.699" stroke="currentColor" {...props}>
    <path
      d="M426.981,0H43.701C34.52,0,27.632,7.769,28.442,16.949L63.45,409.254c0.811,9.173,8.745,18.774,17.644,21.253
    l138.006,38.335c8.887,2.463,23.413,2.479,32.313,0.032l138.177-38.281c8.901-2.472,16.835-11.986,17.645-21.175l35.023-392.469
    C443.068,7.769,436.209,0,426.981,0z M360.51,141.611c-0.006,0.06-0.053,0.107-0.112,0.117c-0.06,0.01-0.118-0.021-0.144-0.077
    L252.13,185.96c-1.54,0.631-2.418,2.264-2.098,3.897c0.322,1.633,1.754,2.811,3.419,2.811h84.103c4.474,0,8.736,1.9,11.728,5.227
    c2.991,3.327,4.429,7.768,3.954,12.216l-13.141,123.273c-0.645,6.048-4.709,11.186-10.447,13.205l-89.269,31.41
    c-3.362,1.184-7.027,1.193-10.397,0.025l-88.852-30.778c-5.773-2-9.871-7.153-10.52-13.228l-5.957-55.828
    c-0.313-2.931,0.634-5.857,2.604-8.048c1.971-2.192,4.779-3.444,7.727-3.444h24.725c5.313,0,9.769,4.007,10.331,9.289l3.655,34.316
    l61.521,21.385l61.803-21.58l7.559-71.17H129.835c-5.297,0-9.746-3.985-10.327-9.25l-3.327-30.164
    c-0.508-4.601,2.088-8.982,6.366-10.745l111.837-46.109c1.269-0.523,1.99-1.868,1.724-3.214c-0.267-1.345-1.446-2.314-2.817-2.314
    H115.542c-3.545,0-6.518-2.677-6.888-6.201l-3.406-32.421c-0.205-1.951,0.428-3.898,1.741-5.357
    c1.313-1.458,3.184-2.291,5.146-2.291h246.379c1.973,0,3.852,0.842,5.166,2.313c1.314,1.472,1.938,3.434,1.715,5.394L360.51,141.611
    z"
    />
  </svg>
);

CSSIcon.requiresFill = true;
