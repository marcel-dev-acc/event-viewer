import { render, screen } from '@testing-library/react';
import App from './App';
import LeftContainer from './components/timelineContainers/leftContainer';
import RightContainer from './components/timelineContainers/rightContainer';

test('App element', () => {
  render(<App />);
  const element = screen.getByText(/Event View/i);
  expect(element).toBeInTheDocument();
});

test('Left container element', () => {
  render(
    <LeftContainer
      title='I am a left container'
      time='13:00'
      description='I am a description'
    />
  );
  const element = screen.getByText(/I am a left container/i);
  expect(element).toBeInTheDocument();
});

test('Right container element', () => {
  render(
    <RightContainer
      title='I am a right container'
      time='13:00'
      description='I am a description'
    />
  );
  const element = screen.getByText(/I am a right container/i);
  expect(element).toBeInTheDocument();
});
