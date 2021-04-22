import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import parts from '../parts';
import { dateFormats, timeFormats } from '../formats';
import SelectGroup from '../components/SelectGroup';

let container = null;
let activeFormatIndex = 0;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('SelectGroup', () => {
  it('Select count matches active format', () => {
    act(() => {
      render(
        <SelectGroup parts={parts.date} formats={dateFormats} type='date' />,
        container
      );
    });
    const partNames = parts.date.map((part) => part.name);
    const expectedDateParts = dateFormats[activeFormatIndex].filter((format) =>
      partNames.includes(format.datePart)
    );
    const Selects = document.querySelectorAll('[data-select-test]');
    expect(Selects.length === expectedDateParts.length).toBe(true);
  });

  describe('formats.length is > 1', () => {
    it('Renders the format toggle', () => {
      act(() => {
        render(
          <SelectGroup parts={parts.date} formats={dateFormats} />,
          container
        );
      });
      const formatToggle = document.querySelector(
        '[data-test-vertical-switch-button]'
      );
      expect(formatToggle).not.toBe(null);
    });
  });
  describe('formats.length is < 2', () => {
    it('Does not render the format toggle', () => {
      act(() => {
        render(
          <SelectGroup parts={parts.time} formats={timeFormats} />,
          container
        );
      });
      const formatToggle = document.querySelector(
        '[data-test-vertical-switch-button]'
      );
      expect(formatToggle).toBe(null);
    });
  });
});
