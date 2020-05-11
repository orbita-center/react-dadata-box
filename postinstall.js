const colors = {
    Reset: "\x1b[0m",
    Red: "\x1b[31m",
    Green: "\x1b[32m",
    Yellow: "\x1b[33m"
};

const red = (s) => colors.Red + s + colors.Reset;
const green = (s) => colors.Green + s + colors.Reset;

console.warn(
(`
   ╭────────────────────────────────────────────────────────────────╮
   │                  react-dadata-box@1.3.4                        │
   │                *** DEPRECATION WARNING ****                    │
   │  at v1.3.5 will be deprecated variant to place customActions   │
   │   as React.Element it must be placed only as function that     │
   │    returns React.Element and take suggestions as argument      │
   │               see more in project README.md                    │
   │      https://github.com/orbita-center/react-dadata-box         │
   ╰────────────────────────────────────────────────────────────────╯
`).replace(/─/g, red('─'))
 .replace(/╭/g, red('╭'))
 .replace(/╰/g, red('╰'))
 .replace(/╮/g, red('╮'))
 .replace(/╯/g, red('╯'))
 .replace(/react-dadata-box\@1\.3\.4/g, green('react-dadata-box@1.3.4'))
 .replace(/v1\.3\.5/g, green('v1.3.5'))
 .replace(/deprecated/g, green('deprecated'))
);
