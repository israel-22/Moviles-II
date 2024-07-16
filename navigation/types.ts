// types.ts

export type RootStackParamList = {
    StartScreen: undefined;
    CategoriasScreen: undefined;
    CartasScreen: { level: string; category: string };
    ResultadosScreen: { score: number };
  };
  