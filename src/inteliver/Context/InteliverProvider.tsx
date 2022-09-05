import React, { FunctionComponent, ReactElement, useMemo } from 'react';
import InteliverContext from './InteliverContext';

type InteliverProviderInterface = {
  inteliverConfigs: { [s: string]: any };
  children: ReactElement;
};

const InteliverProvider: FunctionComponent<InteliverProviderInterface> = ({
  inteliverConfigs,
  children,
}: InteliverProviderInterface) => {
  const configs = useMemo(() => inteliverConfigs, []);
  return (
    <InteliverContext.Provider value={configs}>
      {children}
    </InteliverContext.Provider>
  );
};

export default InteliverProvider;
