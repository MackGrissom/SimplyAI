import React from 'react';
import Image from 'next/image';

// Import SVG files
import ConversationIconSvg from '/public/icons/conversation-icon.svg';
import AboutIconSvg from '/public/icons/about-icon.svg';
import ArrowRightIconSvg from '/public/icons/arrow-right-icon.svg';
import BugIconSvg from '/public/icons/bug-icon.svg';
import CodeIconSvg from '/public/icons/code-icon.svg';
import CollapseLeftIconSvg from '/public/icons/collapse-left-icon.svg';
import CollapseRightIconSvg from '/public/icons/collapse-right-icon.svg';
import DashboardIconSvg from '/public/icons/dashboard-icon.svg';
import FeatureIconSvg from '/public/icons/feature-icon.svg';
import ImageIconSvg from '/public/icons/image-icon.svg';
import MusicIconSvg from '/public/icons/music-icon.svg';
import SettingsIconSvg from '/public/icons/settings-icon.svg';
import VideoIconSvg from '/public/icons/video-icon.svg';

// Functional components that return SVG elements as Next.js Image components
const ConversationIcon = () => (
    <Image src={ConversationIconSvg} alt="Conversation Icon" width={24} height={24} />
);
const AboutIcon = () => <Image src={AboutIconSvg} alt="About Icon" width={24} height={24} />;
const ArrowRightIcon = () => (
    <Image src={ArrowRightIconSvg} alt="Arrow Right Icon" width={24} height={24} />
);
const BugIcon = () => <Image src={BugIconSvg} alt="Bug Icon" width={24} height={24} />;
const CodeIcon = () => <Image src={CodeIconSvg} alt="Code Icon" width={24} height={24} />;
const CollapseLeftIcon = () => (
    <Image src={CollapseLeftIconSvg} alt="Collapse Left Icon" width={24} height={24} />
);
const CollapseRightIcon = () => (
    <Image src={CollapseRightIconSvg} alt="Collapse Right Icon" width={24} height={24} />
);
const DashboardIcon = () => (
    <Image src={DashboardIconSvg} alt="Dashboard Icon" width={24} height={24} />
);
const FeatureIcon = () => <Image src={FeatureIconSvg} alt="Feature Icon" width={24} height={24} />;
const ImageIcon = () => <Image src={ImageIconSvg} alt="Image Icon" width={24} height={24} />;
const MusicIcon = () => <Image src={MusicIconSvg} alt="Music Icon" width={24} height={24} />;
const SettingsIcon = () => (
    <Image src={SettingsIconSvg} alt="Settings Icon" width={24} height={24} />
);
const VideoIcon = () => <Image src={VideoIconSvg} alt="Video Icon" width={24} height={24} />;

export {
    ConversationIcon,
    AboutIcon,
    ArrowRightIcon,
    BugIcon,
    CodeIcon,
    CollapseLeftIcon,
    CollapseRightIcon,
    DashboardIcon,
    FeatureIcon,
    ImageIcon,
    MusicIcon,
    SettingsIcon,
    VideoIcon,
};
