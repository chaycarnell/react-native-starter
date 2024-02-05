import packageJson from '../../package.json';

type LoggingFunction = (...args: Array<unknown>) => void;

type Logger = {
  debug: LoggingFunction;
  error: LoggingFunction;
  info: LoggingFunction;
  log: LoggingFunction;
  trace: LoggingFunction;
  warn: LoggingFunction;
};

const packageInfo = () => `${packageJson.name} (${packageJson.version})`;

export const logger: Logger = {
  debug: (...args) => console.debug(packageInfo(), ...args),
  error: (...args) => console.error(packageInfo(), ...args),
  info: (...args) => console.info(packageInfo(), ...args),
  log: (...args) => console.log(packageInfo(), ...args),
  trace: (...args) => console.trace(packageInfo(), ...args),
  warn: (...args) => console.warn(packageInfo(), ...args),
};
