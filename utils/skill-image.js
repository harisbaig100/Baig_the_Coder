// Importing all skill icons individually
import react from '../app/assets/svg/skills/react.svg';
import reactNative from '../app/assets/svg/skills/react-native.svg';
import expo from '../app/assets/svg/skills/expo.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import reduxToolkit from '../app/assets/svg/skills/redux-toolkit.svg';
import contextApi from '../app/assets/svg/skills/context-api.svg';
import zustand from '../app/assets/svg/skills/zustand.svg';
import reactQuery from '../app/assets/svg/skills/react-query.svg';
import styledComponents from '../app/assets/svg/skills/styled-components.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import materialui from '../app/assets/svg/skills/materialui.svg';
import chakraui from '../app/assets/svg/skills/chakraui.svg';
import reactNavigation from '../app/assets/svg/skills/react-navigation.svg';
import reactSpring from '../app/assets/svg/skills/react-spring.svg';
import graphql from '../app/assets/svg/skills/graphql.svg';
import restApis from '../app/assets/svg/skills/rest-apis.svg';
import firebase from '../app/assets/svg/skills/firebase.svg';
import awsAmplify from '../app/assets/svg/skills/aws-amplify.svg';
import jest from '../app/assets/svg/skills/jest.svg';
import testingLibrary from '../app/assets/svg/skills/react-testing-library.svg';
import eslint from '../app/assets/svg/skills/eslint.svg';
import prettier from '../app/assets/svg/skills/prettier.svg';
import xcode from '../app/assets/svg/skills/xcode.svg';
import androidStudio from '../app/assets/svg/skills/android-studio.svg';
import fastlane from '../app/assets/svg/skills/fastlane.svg';
import nativeModules from '../app/assets/svg/skills/native-modules.svg';
import git from '../app/assets/svg/skills/git.svg';
import docker from '../app/assets/svg/skills/docker.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import sqlite from '../app/assets/svg/skills/sqlite.svg';
import asyncStorage from '../app/assets/svg/skills/async-storage.svg';
import figma from '../app/assets/svg/skills/figma.svg';
import storybook from '../app/assets/svg/skills/storybook.svg';

// Skills Mapping Function
export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase().replace(/\s+/g, '');
    switch (skillID) {
        // Core Technologies
        case 'reactnative': return reactNative;
        case 'react': return react;
        case 'expo': return expo;
        case 'javascript': return javascript;
        case 'typescript': return typescript;

        // State Management
        case 'reduxtoolkit': return reduxToolkit;
        case 'contextapi': return contextApi;
        case 'zustand': return zustand;
        case 'reactquery': return reactQuery;

        // UI & Styling
        case 'styledcomponents': return styledComponents;
        case 'tailwindcss': return tailwind;
        case 'materialui': return materialui;
        case 'chakraui': return chakraui;

        // Navigation & Animations
        case 'reactnavigation': return reactNavigation;
        case 'reactspring': return reactSpring;
        case 'reactnativereanimated': return reactNative;

        // Backend & API Integration
        case 'graphql': return graphql;
        case 'restfulapis': return restApis;
        case 'firebase': return firebase;
        case 'awsamplify': return awsAmplify;

        // Testing & Code Quality
        case 'jest': return jest;
        case 'reacttestinglibrary': return testingLibrary;
        case 'eslint': return eslint;
        case 'prettier': return prettier;

        // Mobile Development Tools
        case 'xcode': return xcode;
        case 'androidstudio': return androidStudio;
        case 'fastlane': return fastlane;
        case 'nativemodules': return nativeModules;

        // Deployment & Collaboration
        case 'git': return git;
        case 'docker': return docker;

        // Database & Storage
        case 'postgresql': return postgresql;
        case 'sqlite': return sqlite;
        case 'asyncstorage': return asyncStorage;

        // Design & Collaboration Tools
        case 'figma': return figma;
        case 'storybook': return storybook;

        default:
            return null; // Return null for non-existing skills
    }
};
