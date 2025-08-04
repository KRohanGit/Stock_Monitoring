import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../home/Hero';

//Test Suite for Hero Component

describe('Hero Component', ()=>{
    test('renders hero image', ()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText('Stock trading dashboard screenshot');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute('src', 'http://www.trvanalyzer.com/wp-content/uploads/2014/12/TRV-3-Screen-1200.png');
    });

    test('renders main heading', ()=>{
        render(<Hero />);
        const heading = screen.getByText(/Invest in all the/i);
        expect(heading).toBeInTheDocument();
    });

    test('renders Get Started link', ()=>{
        render(<Hero />);
        const getStartedLink = screen.getByRole('link', { name: /get started/i });
        expect(getStartedLink).toBeInTheDocument();
        expect(getStartedLink).toHaveAttribute('href', 'http://localhost:3001/signup');
    });

    test('renders Watch Demo button', ()=>{
        render(<Hero />);
        const watchDemoButton = screen.getByRole('button', { name: /watch demo/i });
        expect(watchDemoButton).toBeInTheDocument();
    });

    test('renders statistics section', ()=>{
        render(<Hero />);
        expect(screen.getByText('2M+')).toBeInTheDocument();
        expect(screen.getByText('Active Users')).toBeInTheDocument();
        expect(screen.getByText('500+')).toBeInTheDocument();
        expect(screen.getByText('Stocks Listed')).toBeInTheDocument();
        expect(screen.getByText('24/7')).toBeInTheDocument();
        expect(screen.getByText('Support')).toBeInTheDocument();
    });

    test('renders professional trading platform badge', ()=>{
        render(<Hero />);
        const badge = screen.getByText('Professional Trading Platform');
        expect(badge).toBeInTheDocument();
    });
});