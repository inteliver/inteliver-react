import React, { FunctionComponent, CSSProperties, useContext } from 'react';
import Configs from '../Configs';
import InteliverContext from '../Context/InteliverContext';

interface ImageProps {
  /**
   * img HTML tag src url attribute. more info at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-src
   */
  src: string;

  /**
   * img HTML tag alt attribute. more info at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt
   */
  alt: string;

  /**
   * img HTML tag loading attribute. more info at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-loading
   */
  loading?: 'eager' | 'lazy';

  /**
   * img HTML tag element style attribute
   */
  style?: CSSProperties | undefined;

  /**
   * img HTML tag css classname attribute
   */
  className?: string | undefined;

  /**
   * img HTML tag referrerpolicy attribute. more info at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-referrerpolicy
   */
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'unsafe-url';

  /**
   * img HTML tag width attribute. more info at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-width
   */
  width?: string | undefined;

  /**
   * img HTML tag height attribute. more info at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-height
   */
  height?: string | undefined;
}

/**
 * Primary Inteliver Image component
 */

const Image: FunctionComponent<ImageProps> = ({
  src,
  alt,
  loading,
  style,
  className,
  referrerPolicy,
  width,
  height,
}: ImageProps) => {
  const configs = useContext(InteliverContext);

  const inteliverBaseURL = Configs.INTELIVER_BASE_URL;
  const inteliverCloudName = Configs.INTELIVER_DEFAULT_CLOUD_NAME;
  const intleiverProtocol = Configs.INTELIVER_PROTOCOL;

  const optimizeCommandBuilder = (
    modifiedWidth: number,
    format: string,
    formatQuality: number
  ) => `i_w_${modifiedWidth},i_o_resize,i_o_format_${format}_${formatQuality}`;

  const buildInteliverURL = (commands: string) =>
    `${inteliverBaseURL}/${inteliverCloudName}/${commands}/${intleiverProtocol}/${src}`;

  // const imageWidthResolutions = Configs.IMAGE_WIDTH_100VW;
  // const resolutionMultiplier = Configs.IMAGE_WIDTH_100VW_MULTIPLIER;

  const buildSrcSetByResolutionArray = (
    widthsObject: { [s: string]: number },
    format: string,
    formatQuality: number
  ) => {
    let srcSet = '';
    Object.entries(widthsObject).map(([, pixel]) => {
      const srcurl = buildInteliverURL(
        optimizeCommandBuilder(pixel, format, formatQuality)
      );
      srcSet += `${srcurl} ${pixel}w, `;
      return srcurl;
    });
    return srcSet;
  };

  const pictureElement = (
    <picture>
      {/* WEBP format for all resoluions */}
      {Object.entries(Configs.RESOLUTION_IMAGE_WIDTH).map(
        ([resoluion, widths]) => (
          <source
            media={`(max-width: ${resoluion}px)`}
            srcSet={buildSrcSetByResolutionArray(
              widths,
              'webp',
              Configs.OPTIMIZATION_WEBP_QUALITY
            )}
            type="image/webp"
            key={`${resoluion}_webp`}
          />
        )
      )}
      {/* JPEG format for all resoluions */}
      {Object.entries(Configs.RESOLUTION_IMAGE_WIDTH).map(
        ([resoluion, widths]) => (
          <source
            media={`(max-width: ${resoluion}px)`}
            srcSet={buildSrcSetByResolutionArray(
              widths,
              'jpeg',
              Configs.OPTIMIZATION_JPEG_QUALITY
            )}
            type="image/jpeg"
            key={`${resoluion}_jpeg`}
          />
        )
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        style={style}
        referrerPolicy={referrerPolicy}
        width={width}
        height={height}
        className={className}
      />
    </picture>
  );

  // const pictureElement2 = (
  //   <picture>
  //     {/* WEBP format for all resoluions */}
  //     {imageWidthResolutions.map((imageWidth) => (
  //       <source
  //         media={`(max-width: ${imageWidth * resolutionMultiplier}px)`}
  //         srcSet={buildInteliverURL(
  //           optimizeCommandBuilder(
  //             imageWidth,
  //             'webp',
  //             Configs.OPTIMIZATION_WEBP_QUALITY
  //           )
  //         )}
  //         type="image/webp"
  //         key={`${imageWidth}_webp`}
  //       />
  //     ))}
  //     {/* JPEG format for all resoluions */}
  //     {imageWidthResolutions.map((imageWidth) => (
  //       <source
  //         media={`(max-width: ${imageWidth * resolutionMultiplier}px)`}
  //         srcSet={buildInteliverURL(
  //           optimizeCommandBuilder(
  //             imageWidth,
  //             'jpeg',
  //             Configs.OPTIMIZATION_JPEG_QUALITY
  //           )
  //         )}
  //         type="image/jpeg"
  //         key={`${imageWidth}_jpeg`}
  //       />
  //     ))}
  //     <img
  //       src={src}
  //       alt={alt}
  //       loading={loading}
  //       style={style}
  //       referrerPolicy={referrerPolicy}
  //       width={width}
  //       height={height}
  //       className={className}
  //     />
  //   </picture>
  // );

  return pictureElement;
};

Image.defaultProps = {
  loading: 'eager',
  style: undefined,
  referrerPolicy: 'origin',
  width: undefined,
  height: undefined,
  className: undefined,
};

export default Image;
