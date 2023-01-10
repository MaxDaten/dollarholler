{
  description = "Dollar Holler Shell";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  inputs.flake-utils.url = "github:numtide/flake-utils";
  inputs.devshell.url = "github:numtide/devshell";

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    devshell,
  }:
    flake-utils.lib.eachDefaultSystem (system: let
      pkgs = import nixpkgs {
        inherit system;
        overlays = [devshell.overlay];
        config.allowUnfree = true;
      };
    in {
      devShell = pkgs.devshell.mkShell {
        name = "Dollar Holler Shell";

        packages = with pkgs; [
          which
          envsubst
          bash-completion
          shellcheck

          # Nix
          alejandra # Formatting
          nil # Language Server
          (vscode-with-extensions.override
            {
              vscodeExtensions = with vscode-extensions; [
                # Environment
                johnpapa.vscode-peacock
                jnoortheen.nix-ide
                kamadorueda.alejandra
                mkhl.direnv

                # Project
                svelte.svelte-vscode
                bradlc.vscode-tailwindcss
              ];
            })

          # frontend
          nodejs-18_x
        ];

        env = [
          {
            name = "GITHUB_OWNER";
            value = "maxdaten";
          }
        ];
      };
    });
}
