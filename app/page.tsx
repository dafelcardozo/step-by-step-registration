
"use client"
import * as React from 'react';
//import Router from 'next/router';

import SideBar, {SideBarProps} from '@/components/home/sidebar';
import PersonalInfoForm from '@/components/home/personal-info-form';
import type { AppProps } from "next/app";
//import { wrapper } from "@/components/shared/store";
//import { useStore, Provider } from "react-redux";


type RegistrationFormProps = SideBarProps;


export default function MyApp({ Component, pageProps }: AppProps) {
//  const { store } = wrapper.useWrappedStore({ initialState: { foo: "bar" } });
  return (
      <SideBar {...pageProps}>
        <PersonalInfoForm />
      </SideBar>
  );
}
//export default wrapper.withRedux(MyApp);

/*
export default function RegistrationForm({...props}:RegistrationFormProps) {
  return (
    <SideBar {...props}>
      <PersonalInfoForm />
    </SideBar>
  );
}
*/
