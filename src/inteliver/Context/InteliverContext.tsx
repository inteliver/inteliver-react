import React from 'react';

type InteliverContextConfigsInterface = {
  [s: string]: any;
};

const defaultContextConfigs: InteliverContextConfigsInterface = {
  configs: { cloudname: 'zap' },
};

const InteliverContext = React.createContext(defaultContextConfigs);

export default InteliverContext;
