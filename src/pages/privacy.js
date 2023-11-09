import React from 'react';
import TextContent from '../components/TextContent/TextContent';

export default function PagePrivacy() {

    const elements = [
        'intro',
        'data',
        'data-identity',
        'cookies',
        'retention',
        'deletion',
        'vulnerability',
        'modification',
        'remedies',
    ]

    return (
        <TextContent elements={elements} pageName="privacy" />
    )
}