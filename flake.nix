{
  description = "Astro development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {
      inherit system;
    };
  in {
    devShells.${system}.default = pkgs.mkShell {
      buildInputs = with pkgs; [
        nodejs_22
        nodePackages.pnpm
      ];
    };

    packages.${system} = {
      astro-ui = pkgs.stdenv.mkDerivation {
        pname = "@stamm-phoenix/astro-ui";
        version = "0.0.1"; # This should ideally be read from package.json

        src = self;

        buildInputs = with pkgs; [
          nodejs_22
          nodePackages.pnpm
          nodePackages.npm
        ];

        installPhase = ''
          pnpm install --frozen-lockfile
          pnpm run build:lib
          mkdir -p $out
          cp -r dist $out/
          cp -r package.json $out/
          cp -r README.md $out/
          cp -r LICENSE $out/
        '';
      };
      default = self.packages.${system}.astro-ui;
    };
  };
}
