import React, { FunctionComponent } from 'react';
// import classNames from 'classnames';
// import styles from './image.module.scss';

interface ImageProps {
  /**
   * Image src url
   */
  src: string;

  /**
   * Image alt
   */
  alt: string;
}

/**
 * Primary Inteliver Image component
 */

const Image: FunctionComponent<ImageProps> = ({ src, alt }: ImageProps) => {
  const inteliverBaseURL = 'https://res.inteliver.com/media/v1';
  const inteliverCloudName = 'zap';
  const intleiverProtocol = 'uri';
  // const inteliverCommands = '';

  const buildInteliverURL = (commands: string) =>
    `${inteliverBaseURL}/${inteliverCloudName}/${commands}/${intleiverProtocol}/${src}`;

  const mobileWidthBreakPoint = 420;
  const tabletWidthBreakPoint = 810;
  const desktopWidthBreakPoint = 1920;
  const mobileWebpSrcSet = buildInteliverURL(
    'i_w_250,i_o_resize,i_o_format_webp_75'
  );

  const tabletWebpSrcSet = buildInteliverURL(
    'i_w_350,i_o_resize,i_o_format_webp_75'
  );

  const desktopWebpSrcSet = buildInteliverURL(
    'i_w_450,i_o_resize,i_o_format_webp_75'
  );
  const mobileJpegSrcSet = buildInteliverURL(
    'i_w_250,i_o_resize,i_o_format_jpeg_80'
  );

  const tabletJpegSrcSet = buildInteliverURL(
    'i_w_350,i_o_resize,i_o_format_jpeg_80'
  );

  const desktopJpegSrcSet = buildInteliverURL(
    'i_w_450,i_o_resize,i_o_format_jpeg_80'
  );

  return (
    <picture>
      {/* WEBP format for mobile */}
      <source
        media={`(max-width: ${mobileWidthBreakPoint}px)`}
        srcSet={mobileWebpSrcSet}
        type="image/webp"
      />
      {/* WEBP format for tablet */}
      <source
        media={`(max-width: ${tabletWidthBreakPoint}px)`}
        srcSet={tabletWebpSrcSet}
        type="image/webp"
      />
      {/* WEBP format for desktop */}
      <source
        media={`(max-width: ${desktopWidthBreakPoint}px)`}
        srcSet={desktopWebpSrcSet}
        type="image/webp"
      />
      {/* JPEG format for mobile */}
      <source
        media={`(max-width: ${mobileWidthBreakPoint}px)`}
        srcSet={mobileJpegSrcSet}
        type="image/jpg"
      />
      {/* JPEG format for tablet */}
      <source
        media={`(max-width: ${tabletWidthBreakPoint}px)`}
        srcSet={tabletJpegSrcSet}
        type="image/jpg"
      />
      {/* JPEG format for desktop */}
      <source
        media={`(max-width: ${desktopWidthBreakPoint}px)`}
        srcSet={desktopJpegSrcSet}
        type="image/jpg"
      />
      <img src={src} alt={alt} />
    </picture>
  );
};

Image.defaultProps = {};

export default Image;
