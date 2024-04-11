import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Login from '../index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock useNavigate function
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  it('should render without crashing', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );
  });

  it('should enable the Continue button when all fields are filled correctly', async () => {
    const queryClient = new QueryClient();
    const { getByPlaceholderText } = render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );
  
    // Get input fields
    const emailInput = getByPlaceholderText('Your email');
    const passwordInput = getByPlaceholderText('Password');
  
    // Fill input fields
    fireEvent.change(emailInput, { target: { value: 'quocntx@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Xuanquoc2206@' } });
  
  });
  

  it('should disable the Continue button when any field is empty or invalid', async () => {
    const queryClient = new QueryClient();
    const { getByPlaceholderText } = render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    // Get input fields
    const emailInput = getByPlaceholderText('Your email');
    const passwordInput = getByPlaceholderText('Password');

    // Fill input fields with invalid data
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: '' } });
  });

});
