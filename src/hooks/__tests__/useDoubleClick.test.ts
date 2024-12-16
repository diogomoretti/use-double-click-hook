import { renderHook, act } from '@testing-library/react-hooks';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import { useDoubleClick } from '../useDoubleClick';

describe('useDoubleClick', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('should not trigger onDoubleClick on single click', () => {
    const onDoubleClick = vi.fn();
    const { result } = renderHook(() => useDoubleClick({ onDoubleClick }));

    act(() => {
      result.current();
    });

    vi.runAllTimers();
    expect(onDoubleClick).not.toHaveBeenCalled();
  });

  it('should trigger onDoubleClick on double click within latency period', () => {
    const onDoubleClick = vi.fn();
    const { result } = renderHook(() => useDoubleClick({ onDoubleClick }));

    act(() => {
      result.current(); // First click
      result.current(); // Second click
    });

    expect(onDoubleClick).toHaveBeenCalledTimes(1);
  });

  it('should not trigger onDoubleClick if second click is after latency period', () => {
    const onDoubleClick = vi.fn();
    const { result } = renderHook(() => useDoubleClick({ onDoubleClick, latency: 300 }));

    act(() => {
      result.current(); // First click
      vi.advanceTimersByTime(301); // Wait longer than latency
      result.current(); // Second click
    });

    expect(onDoubleClick).not.toHaveBeenCalled();
  });

  it('should reset click count after latency period', () => {
    const onDoubleClick = vi.fn();
    const { result } = renderHook(() => useDoubleClick({ onDoubleClick, latency: 300 }));

    act(() => {
      result.current(); // First click
      vi.advanceTimersByTime(301); // Wait longer than latency
      result.current(); // New first click
      result.current(); // Second click
    });

    expect(onDoubleClick).toHaveBeenCalledTimes(1);
  });
});