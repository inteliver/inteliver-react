class Configs {
  // Inteliver Configs
  static readonly INTELIVER_BASE_URL = 'https://res.inteliver.com/media/v1';

  static readonly INTELIVER_DEFAULT_CLOUD_NAME = 'zap';

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

  static readonly RESOLUTION_IMAGE_WIDTH = {
    3440: {
      '100VW': 1920,
      '75VW': 1440,
      '50VW': 960,
      '33VW': 640,
      '10VW': 192,
    },
    1920: {
      '100VW': 1920,
      '75VW': 1440,
      '50VW': 960,
      '33VW': 640,
      '10VW': 192,
    },
    1600: {
      '100VW': 1600,
      '75VW': 1200,
      '50VW': 800,
      '33VW': 533,
      '10VW': 160,
    },
    1366: {
      '100VW': 1366,
      '75VW': 1025,
      '50VW': 683,
      '33VW': 455,
      '10VW': 135,
    },
    1024: {
      '100VW': 1024,
      '75VW': 768,
      '50VW': 512,
      '33VW': 341,
      '10VW': 102,
    },
    768: { '100VW': 768, '75VW': 576, '50VW': 384, '33VW': 256, '10VW': 75 },
    640: { '100VW': 640, '75VW': 480, '50VW': 320, '33VW': 213, '10VW': 64 },
    420: { '100VW': 420, '75VW': 315, '50VW': 210, '33VW': 140, '10VW': 42 },
  };

  // Image Resolution Configs
  static readonly DESKTOP_RESOLUTIONS = [1920, 1600, 1536, 1440, 1366, 1280];

  static readonly TABLET_RESOLUTIONS = [962, 810, 768, 601];

  static readonly MOBILE_RESOLUTIONS = [414, 390, 360];
}

export default Configs;
