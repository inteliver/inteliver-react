class Configs {
  // Inteliver Configs
  static readonly INTELIVER_BASE_URL = 'https://res.inteliver.com/media/v1';

  static readonly INTELIVER_CLOUD_NAME = 'zap';

  static readonly INTELIVER_PROTOCOL = 'uri';

  // Optimization Configs
  static readonly OPTIMIZATION_WEBP_QUALITY = 75;

  static readonly OPTIMIZATION_JPEG_QUALITY = 75;

  // Image Width with Regards to Resolution
  static readonly IMAGE_WIDTH_100VW = [420, 640, 768, 1024, 1366, 1600, 1920];

  static readonly IMAGE_WIDTH_100VW_MULTIPLIER = 1;

  static readonly IMAGE_WIDTH_75VW = [315, 480, 576, 768, 1025, 1200, 1440];

  static readonly IMAGE_WIDTH_75VW_MULTIPLIER = 1.3;

  static readonly IMAGE_WIDTH_50VW = [210, 320, 384, 512, 683, 800, 960];

  static readonly IMAGE_WIDTH_50VW_MULTIPLIER = 2;

  static readonly IMAGE_WIDTH_33VW = [140, 213, 256, 341, 455, 533, 640];

  static readonly IMAGE_WIDTH_33VW_MULTIPLIER = 3;

  // Image Resolution Configs
  static readonly DESKTOP_RESOLUTIONS = [1920, 1600, 1536, 1440, 1366, 1280];

  static readonly TABLET_RESOLUTIONS = [962, 810, 768, 601];

  static readonly MOBILE_RESOLUTIONS = [414, 390, 360];
}

export default Configs;
