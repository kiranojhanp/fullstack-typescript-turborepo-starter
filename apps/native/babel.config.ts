// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function (api: any) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
}
