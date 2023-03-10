/**
 * MIT License
 *
 * Copyright (c) 2022, Brion Mario
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

import {TestableComponent, ThemeTypes} from '@brionmario/ui';
import {DownloadIcon} from '@heroicons/react/solid';
import Image from 'next/future/image';
import Link from 'next/link';
import {useTheme} from 'nextra-theme-docs';
import {ReactElement} from 'react';
import Logo from '../logos/logo';
import {CTAButton} from '../pages/home-shared/CTAButton';
import {FadeIn} from '../pages/home-shared/FadeIn';
import {HeroText, SectionSubtext} from '../pages/home-shared/Headings';
import useStyles from './hero.styles';

export type HeroProps = Partial<HTMLDivElement> & TestableComponent;

const Hero = (props: HeroProps): ReactElement => {
  const {className} = props;
  const {resolvedTheme: theme} = useTheme();
  const {classes, css, cx} = useStyles();

  const getWSO2LogoURL = (): string => {
    if (theme === ThemeTypes.DARK) {
      return '/images/logos/white/wso2.svg';
    }

    return '/images/logos/black/wso2.svg';
  };

  /**
   * TODO: Extract this to a hook.
   */
  const onResumeDownload = () => {
    const a = document.createElement('a');

    a.style.display = 'none';
    a.href = `/assets/resume/resume.pdf`;
    a.download = 'Brion Mario - Resume.pdf';
    document.body.appendChild(a);
    a.click();
  };

  return (
    <div css={css}>
      <FadeIn noVertical className={cx(classes.root, className)}>
        <FadeIn delay={0.15} className="z-50 flex flex-col items-center justify-center gap-5 px-6 text-center lg:gap-6">
          <SectionSubtext hero data-testid="hero-greeting-wrapper" className="hero__greeting">
            <span className="hero__greeting">
              <span className="hero__greeting__wave">????</span>
              Hi there! I&apos;m
            </span>
          </SectionSubtext>
          <HeroText h1>
            <Logo alt="Hero section Logo" width={500} height={85} className="hero__logo" />
          </HeroText>
          <SectionSubtext hero>
            <div>A front-end enthusiast based in Sri Lanka ????????</div>
            <div className="hero__greeting__caption__employment">
              Currently working as a Senior Software Engineer at
              <Link href="https://wso2.com" target="_blank" rel="noopener noreferrer">
                <span className="hero__greeting__caption__employment__wso2">
                  <Image alt="wso2 logo" src={getWSO2LogoURL()} width={50} height={15} className="block" />
                </span>
              </Link>
            </div>
          </SectionSubtext>
        </FadeIn>
        <FadeIn delay={0.3} className="z-50 flex flex-col items-center w-full max-w-md gap-5 px-6 md:max-w-lg">
          <div className="flex flex-col w-116 gap-3 md:!flex-row">
            <CTAButton>
              <Link href="/blog">
                <span className="block py-3">Read the blog</span>
              </Link>
            </CTAButton>
            <CTAButton outline onClick={() => onResumeDownload()}>
              <div className="flex flex-row content-center align-middle justify-center items-center">
                <span className="block py-3 px-3">Download Resume</span>
                <DownloadIcon height={20} />
              </div>
            </CTAButton>
          </div>
        </FadeIn>
        <FadeIn delay={0.45} className="mask">
          <Image alt="" src="/images/people/brion-headshot-transparent-001.png" width={400} height={800} />
        </FadeIn>
      </FadeIn>
    </div>
  );
};

export default Hero;
