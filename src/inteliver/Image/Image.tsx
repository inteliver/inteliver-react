import React, { FunctionComponent } from 'react';
import Configs from '../Configs';

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
  const inteliverBaseURL = Configs.INTELIVER_BASE_URL;
  const inteliverCloudName = Configs.INTELIVER_CLOUD_NAME;
  const intleiverProtocol = Configs.INTELIVER_PROTOCOL;

  const optimizeCommandBuilder = (
    width: number,
    format: string,
    formatQuality: number
  ) => `i_w_${width},i_o_resize,i_o_format_${format}_${formatQuality}`;

  const buildInteliverURL = (commands: string) =>
    `${inteliverBaseURL}/${inteliverCloudName}/${commands}/${intleiverProtocol}/${src}`;

  const imageWidthResolutions = Configs.IMAGE_WIDTH_33VW;
  const resolutionMultiplier = Configs.IMAGE_WIDTH_33VW_MULTIPLIER;

  const pictureElement = (
    <picture>
      {/* WEBP format for all resoluions */}
      {imageWidthResolutions.map((imageWidth) => (
        <source
          media={`(max-width: ${imageWidth * resolutionMultiplier}px)`}
          srcSet={buildInteliverURL(
            optimizeCommandBuilder(
              imageWidth,
              'webp',
              Configs.OPTIMIZATION_WEBP_QUALITY
            )
          )}
          type="image/webp"
          key={`${imageWidth}_webp`}
        />
      ))}
      {/* JPEG format for all resoluions */}
      {imageWidthResolutions.map((imageWidth) => (
        <source
          media={`(max-width: ${imageWidth * resolutionMultiplier}px)`}
          srcSet={buildInteliverURL(
            optimizeCommandBuilder(
              imageWidth,
              'jpeg',
              Configs.OPTIMIZATION_JPEG_QUALITY
            )
          )}
          type="image/jpeg"
          key={`${imageWidth}_jpeg`}
        />
      ))}
      <img src={src} alt={alt} />
    </picture>
  );

  return pictureElement;
};

Image.defaultProps = {};

export default Image;
