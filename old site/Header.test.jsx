import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Setup global React
window.React = React;

const babel = require('@babel/core');

// Since Header.jsx is not a module export and sets window.Header, we need to execute it globally
const fs = require('fs');
const path = require('path');
const rawCode = fs.readFileSync(path.join(__dirname, 'Header.jsx'), 'utf-8');
const { code } = babel.transformSync(rawCode, {
  filename: 'Header.jsx',
  presets: ['@babel/preset-react']
});
eval(code);

const Header = window.Header;

describe('Header Component', () => {
  let mockSetRoute;

  beforeEach(() => {
    mockSetRoute = jest.fn();
  });

  test('renders all navigation items correctly', () => {
    render(<Header route="home" setRoute={mockSetRoute} />);

    expect(screen.getByText('Course Info')).toBeInTheDocument();
    expect(screen.getByText('Syllabus')).toBeInTheDocument();
    expect(screen.getByText('Final Project')).toBeInTheDocument();
    expect(screen.getByText('Office Hours')).toBeInTheDocument();
    expect(screen.getByText('People')).toBeInTheDocument();
  });

  test('applies "is-active" class to the correct navigation item', () => {
    render(<Header route="syllabus" setRoute={mockSetRoute} />);

    const activeLink = screen.getByText('Syllabus');
    expect(activeLink).toHaveClass('is-active');

    const inactiveLink = screen.getByText('Course Info');
    expect(inactiveLink).not.toHaveClass('is-active');
  });

  test('calls setRoute with correct argument when a navigation link is clicked', () => {
    render(<Header route="home" setRoute={mockSetRoute} />);

    const projectLink = screen.getByText('Final Project');
    fireEvent.click(projectLink);

    expect(mockSetRoute).toHaveBeenCalledWith('project');
    expect(mockSetRoute).toHaveBeenCalledTimes(1);
  });

  test('calls setRoute with "home" when brand link is clicked', () => {
    render(<Header route="syllabus" setRoute={mockSetRoute} />);

    // The brand link doesn't have an aria-label, but we can query by text
    // "Beyond Bits & Atoms" is inside spans
    const brandLink = screen.getByText(/Beyond Bits/i).closest('a');
    fireEvent.click(brandLink);

    expect(mockSetRoute).toHaveBeenCalledWith('home');
    expect(mockSetRoute).toHaveBeenCalledTimes(1);
  });

  test('Slack link has correct attributes', () => {
    render(<Header route="home" setRoute={mockSetRoute} />);

    const slackLink = screen.getByText('Join Slack');
    expect(slackLink).toHaveAttribute('href', '#');
    expect(slackLink).toHaveClass('slack');
  });
});
