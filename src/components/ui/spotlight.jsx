import React from "react";
import "./spotlight.css"; // <- import the CSS we define below

export const Spotlight = ({ className = "", fill = "white" }) => {
    return (
        <svg
            className={`spotlight-svg ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3787 2842"
            fill="none"
        >
            <g filter="url(#spotlight-filter)">
                <ellipse
                    cx="1924.71"
                    cy="273.501"
                    rx="1924.71"
                    ry="273.501"
                    transform="matrix(-1.22377 -0.568943 -0.568943 0.922377 3631.88 2291.09)"
                    fill={fill}
                    fillOpacity="0.25"
                />
            </g>
            <defs>
                <filter
                    id="spotlight-filter"
                    x="0.860352"
                    y="0.838989"
                    width="3785.16"
                    height="2840.26"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
                </filter>
            </defs>
        </svg>
    );
};
