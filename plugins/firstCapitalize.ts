export default defineNuxtPlugin(() => {
  return {
    provide: {
      firstCapitalize: (str: string) => {
        if (typeof str !== "string") return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
      },
    },
  };
});
