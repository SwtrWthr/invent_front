import React, { ReactElement, ReactNode } from 'react'

export type GetLayout = (page: ReactElement) => ReactNode;

interface LayoutFC extends React.FC {
  getLayout: GetLayout;
}