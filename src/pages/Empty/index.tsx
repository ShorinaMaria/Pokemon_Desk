import React from 'react';
import Header from '../../components/Header';

interface EmptyPageProps {
    title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => <div>
    <Header/>
    <div>
        Empty page for {title}.
    </div>
</div>;

export default EmptyPage;