import moment from 'moment';

import { IRawTimeRange, parseRange } from '@/components/TimeRangePicker';

export const getDefaultStepByStartAndEnd = (start: number, end: number) => {
  return Math.max(Math.floor((end - start) / 240), 1);
};

export function interpolateString(options: { query: string; range?: IRawTimeRange; step?: number }) {
  const { query, range, step } = options;
  if (range) {
    const parsedRange = parseRange(range);
    const from = moment(parsedRange.start);
    const fromMs = from.valueOf();
    const fromUnix = moment(from).unix();
    const fromDateISO = from.toISOString();
    const to = moment(parsedRange.end);
    const toMs = to.valueOf();
    const toUnix = moment(to).unix();
    const toDateISO = to.toISOString();
    const interval = step ? step : getDefaultStepByStartAndEnd(fromUnix, toUnix);

    return query
      .replace(/\$__from/g, `${fromMs}`)
      .replace(/\$__from_date_seconds/g, `${fromUnix}`)
      .replace(/\$__from_date_iso/g, fromDateISO)
      .replace(/\$__from_date/g, `${fromDateISO}`)
      .replace(/\$__to/g, `${toMs}`)
      .replace(/\$__to_date_seconds/g, `${toUnix}`)
      .replace(/\$__to_date_iso/g, toDateISO)
      .replace(/\$__to_date/g, `${toDateISO}`)
      .replace(/\$__interval/g, `${interval}s`)
      .replace(/\$__interval_ms/g, `${interval * 1000}ms`)
      .replace(/\$__rate_interval/g, `${interval * 4}s`)
      .replace(/\$__range/g, `${toUnix - fromUnix}s`)
      .replace(/\$__range_s/g, `${toUnix - fromUnix}s`)
      .replace(/\$__range_ms/g, `${(toUnix - fromUnix) * 1000}ms`);
  }
  if (step) {
    return query.replace(/\$__interval/g, `${step}s`).replace(/\$__rate_interval/g, `${step * 4}s`);
  }
  return query;
}
