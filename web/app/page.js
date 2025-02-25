import { Code } from "bright"
import { CodeLine, demo, Demo } from "./demo"
import { SocialLinks } from "./icons"
import { WithBackground } from "./with-background"
import InlineAnnotationDemo from "./demos/inline-annotation"
import MultilineAnnotationDemo from "./demos/multiline-annotation"
import PropsAnnotationDemo from "./demos/props-annotation"
import ExtensionsAnnotationDemo from "./demos/extensions"

export default async function Page() {
  return (
    <div>
      <div style={{ height: "5rem" }} />
      <Title />
      <div style={{ height: "4rem" }} />
      <Demo
        demo={demo({
          codeLine: (
            <CodeLine
              props={
                <>
                  <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
                  <span style={{}}>=</span>
                  <span style={{}}>"</span>
                  <span style={{ color: "rgb(195, 232, 141)" }}>py</span>
                  <span style={{}}>"</span>
                </>
              }
              children={
                <span style={{ color: "var(--text-color)" }}>
                  print("hello brightness")
                </span>
              }
            />
          ),
        })}
        code='print("hello brightness")'
      />
      <div style={{ height: "3rem" }} />
      <Details />
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Title</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({
          focus: true,
          middle: (
            <>
              <span>const myCode = `</span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                let hello = "hello brightness"
              </span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                console.log(hello, "my old friend")
              </span>
              <br />
              <span>`.trim()</span>
              <br />
              <br />
            </>
          ),
          codeLine: (
            <CodeLine
              mark
              children={<span style={{}}>{`{myCode}`}</span>}
              props={
                <>
                  <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
                  <span>="</span>
                  <span style={{ color: "rgb(195, 232, 141)" }}>js</span>
                  <span>" </span>

                  <span style={{ color: "rgb(199, 146, 234)" }}>title</span>
                  <span>="</span>
                  <span style={{ color: "rgb(195, 232, 141)" }}>shiny.js</span>
                  <span>"</span>
                </>
              }
            />
          ),
        })}
        code={`let hello = "hello brightness"
console.log(hello, "my old friend")`}
        codeProps={{ title: "shiny.js", lang: "js" }}
      />
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Line Numbers</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({
          focus: true,
          middle: (
            <>
              <span>const myCode = `</span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                let hello = "hello brightness"
              </span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                console.log(hello, "my old friend")
              </span>
              <br />
              <span>`.trim()</span>
              <br />
              <br />
            </>
          ),
          codeLine: (
            <CodeLine
              mark
              children={<span style={{}}>{`{myCode}`}</span>}
              props={
                <>
                  <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
                  <span>="</span>
                  <span style={{ color: "rgb(195, 232, 141)" }}>js</span>
                  <span>" </span>
                  <span style={{ color: "rgb(199, 146, 234)" }}>
                    lineNumbers
                  </span>
                </>
              }
            />
          ),
        })}
        code={`let hello = "hello brightness"
console.log(hello, "my old friend")`}
        codeProps={{ lineNumbers: true, lang: "js" }}
      />
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Global Props</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({
          focus: true,
          middle: (
            <>
              <span>const myCode = `</span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                let hello = "hello brightness"
              </span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                console.log(hello, "my old friend")
              </span>
              <br />
              <span>`.trim()</span>
              <br />
              <br />
              <span style={{ color: "rgb(195, 232, 141)", filter: "unset" }}>
                // set any prop globally
              </span>
              <br />
              <span style={{ filter: "unset" }}>
                <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>.
                <span style={{ color: "rgb(199, 146, 234)" }}>lineNumbers</span>{" "}
                = true
              </span>
              <br />
              <br />
            </>
          ),
          codeLine: (
            <CodeLine
              children={<span style={{}}>{`{myCode}`}</span>}
              props={
                <>
                  <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
                  <span>="</span>
                  <span style={{ color: "rgb(195, 232, 141)" }}>js</span>
                  <span>" </span>
                  <span style={{ color: "rgb(199, 146, 234)" }}>
                    lineNumbers
                  </span>
                </>
              }
            />
          ),
        })}
        code={`let hello = "hello brightness"
console.log(hello, "my old friend")`}
        codeProps={{ lineNumbers: true, lang: "js" }}
      />
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Theme</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({
          focus: true,
          middle: (
            <>
              <span>const myCode = `</span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                theFuture, bright = 10, 10
                <br />
                print(theFuture is bright)
              </span>
              <br />
              <span>`.trim()</span>
              <br />
              <br />
              <span style={{ color: "rgb(195, 232, 141)", filter: "unset" }}>
                // there are several themes built in
                <br />
                // typescript should autocomplete the options
              </span>
              <br />
              <span style={{ filter: "unset" }}>
                <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>.
                <span style={{ color: "rgb(199, 146, 234)" }}>theme</span> = "
                <span style={{ color: "rgb(195, 232, 141)" }}>
                  material-lighter
                </span>
                "
              </span>
              <br />
              <br />
            </>
          ),
          codeLine: (
            <CodeLine
              props={
                <>
                  <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
                  <span>="</span>
                  <span style={{ color: "rgb(195, 232, 141)" }}>py</span>
                  <span>"</span>
                </>
              }
              children={<span style={{}}>{`{myCode}`}</span>}
            />
          ),
        })}
        code={`theFuture, bright = 10, 10
print(theFuture is bright)`}
        codeProps={{ lang: "py", theme: "material-lighter" }}
      />
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Dark Mode</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({
          focus: true,
          middle: (
            <>
              <span>const myCode = `</span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                theFuture, bright = 10, 10
                <br />
                print(theFuture is bright)
              </span>
              <br />
              <span>`.trim()</span>
              <br />
              <br />
              <span style={{ filter: "unset" }}>
                <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>.
                <span style={{ color: "rgb(199, 146, 234)" }}>theme</span>
                {` = {`}
                <br />
                {`  dark: "`}
                <span style={{ color: "rgb(195, 232, 141)" }}>github-dark</span>
                ",
                <br />
                {`  light: "`}
                <span style={{ color: "rgb(195, 232, 141)" }}>
                  github-light
                </span>
                "<br />
                {`}`}
              </span>
              <br />
              <br />
            </>
          ),
          codeLine: (
            <>
              <span>
                {`    <>`}
                <br />
              </span>
              <span style={{ filter: "unset" }}>
                {`      <div`}
                <span style={{}}> </span>
                <span style={{ color: "rgb(199, 146, 234)" }}>data-theme</span>
                <span>="</span>
                <span style={{ color: "rgb(195, 232, 141)" }}>dark</span>
                <span>"</span>
                <span style={{}}>&gt;</span>
                <br />
              </span>
              <span>
                <span style={{ color: "rgb(240, 113, 120)" }}>
                  {"        "}
                </span>
                <span style={{}}>&lt;</span>
                <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>
                <span style={{}}> </span>
                <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
                <span>="</span>
                <span style={{ color: "rgb(195, 232, 141)" }}>py</span>
                <span>"</span>
                <span style={{}}>&gt;</span>
                <span style={{}}>{`{myCode}`}</span>
                <span style={{}}>&lt;/</span>
                <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>
                <span style={{}}>&gt;</span>
                <br />
              </span>
              <span style={{ filter: "unset" }}>
                {`      </div>`}
                <br />
              </span>
              <span style={{ filter: "unset" }}>
                {`      <div`}
                <span style={{}}> </span>
                <span style={{ color: "rgb(199, 146, 234)" }}>data-theme</span>
                <span>="</span>
                <span style={{ color: "rgb(195, 232, 141)" }}>light</span>
                <span>"</span>
                <span style={{}}>&gt;</span>
                <br />
              </span>
              <span>
                <span style={{ color: "rgb(240, 113, 120)" }}>
                  {"        "}
                </span>
                <span style={{}}>&lt;</span>
                <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>
                <span style={{}}> </span>
                <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
                <span>="</span>
                <span style={{ color: "rgb(195, 232, 141)" }}>py</span>
                <span>"</span>
                <span style={{}}>&gt;</span>
                <span style={{}}>{`{myCode}`}</span>
                <span style={{}}>&lt;/</span>
                <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>
                <span style={{}}>&gt;</span>
                <br />
              </span>
              <span style={{ filter: "unset" }}>
                {`      </div>`}
                <br />
              </span>
              <span>
                {`    </>`}
                <br />
              </span>
            </>
          ),
        })}
        code={`theFuture, bright = 10, 10
print(theFuture is bright)`}
        codeProps={{ lang: "py", theme: "github-light" }}
        preview={
          <>
            <div>
              <Code
                lang="py"
                theme={{
                  dark: "github-dark",
                  light: "github-light",
                }}
                style={{
                  fontSize: "1.2rem",
                  margin: "-2rem auto 0",
                  position: "relative",
                  border: "1px solid #444",
                  width: "80%",
                }}
              >{`theFuture, bright = 10, 10
print(theFuture is bright)`}</Code>
            </div>
            <div data-theme="light">
              <Code
                lang="py"
                theme={{
                  dark: "github-dark",
                  light: "github-light",
                }}
                style={{
                  fontSize: "1.2rem",
                  margin: "0.5rem auto 0",
                  position: "relative",
                  border: "1px solid #444",
                  width: "80%",
                }}
              >{`theFuture, bright = 10, 10
print(theFuture is bright)`}</Code>
            </div>
          </>
        }
      />
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Custom Theme</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        demo={demo({
          focus: true,
          middle: (
            <>
              <span>const myCode = `</span>
              <br />
              <span style={{ color: "var(--text-color)" }}>
                theFuture, bright = 10, 10
                <br />
                print(theFuture is bright)
              </span>
              <br />
              <span>`.trim()</span>
              <br />
              <br />
              <span style={{ color: "rgb(195, 232, 141)", filter: "unset" }}>
                // you can make your own theme
                <br />
                // or extend any VS Code theme
                <br />
                // with{" "}
                <a
                  href="https://themes.codehike.org/bright"
                  style={{
                    color: "rgb(195, 232, 141)",
                    textDecoration: "underline",
                  }}
                >
                  https://themes.codehike.org/bright
                </a>
              </span>
              <br />
              <span style={{ filter: "unset" }}>
                <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>.
                <span style={{ color: "rgb(199, 146, 234)" }}>theme</span>
                {` = {`}
                <br />
                <span>{`  `}name: "myTheme"</span>
                <br />
                {`}`}
              </span>
              <br />
              <br />
            </>
          ),
          codeLine: (
            <CodeLine
              props={
                <>
                  <span style={{ color: "rgb(199, 146, 234)" }}>lang</span>
                  <span>="</span>
                  <span style={{ color: "rgb(195, 232, 141)" }}>py</span>
                  <span>"</span>
                </>
              }
              children={<span style={{}}>{`{myCode}`}</span>}
            />
          ),
        })}
        preview={<div />}
      />
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Markdown / MDX</h2>
      <div style={{ height: "1rem" }} />
      <Demo
        filename="mdx-components.js"
        preview={<div />}
        demo={
          <code>
            <span>
              <span style={{ fontStyle: "italic" }}>import</span>
              <span style={{ color: "rgb(238, 255, 255)" }}> </span>
              <span>{"{"}</span>
              <span style={{ color: "rgb(240, 113, 120)" }}> </span>
              <span style={{ color: "rgb(255, 203, 107)" }}>Code</span>
              <span style={{ color: "rgb(240, 113, 120)" }}> </span>
              <span>{"}"}</span>
              <span style={{ color: "rgb(238, 255, 255)" }}> </span>
              <span style={{ fontStyle: "italic" }}>from</span>
              <span style={{ color: "rgb(238, 255, 255)" }}> </span>
              <span>"</span>
              <span style={{ color: "rgb(195, 232, 141)" }}>bright</span>
              <span>"</span>
              <br />
            </span>
            <br />
            <span style={{ color: "rgb(195, 232, 141)" }}>
              <span>// You need this file to use MDX in server components</span>
              <br />
              <span>
                // Learn more from{" "}
                <a
                  style={{
                    color: "rgb(195, 232, 141)",
                    textDecoration: "underline",
                  }}
                  href="https://beta.nextjs.org/docs/guides/mdx"
                >
                  the Next.js docs
                </a>
              </span>
            </span>
            <br />
            <br />
            <span>
              <span style={{ fontStyle: "italic" }}>export</span> function
              useMDXComponents(components) {"{"}
              <br />
            </span>
            <span>
              {"  "}
              <span style={{ fontStyle: "italic" }}>return</span>
              {" { ...components, "}
              <span style={{ color: "rgb(199, 146, 234)" }}>pre</span>:
              <span style={{ color: "rgb(255, 203, 107)" }}> Code</span>
              <span>{" }"}</span>
              <br />
            </span>
            <span>{"}"}</span>
          </code>
        }
      />
      {/* <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Inline Annotations</h2>
      <InlineAnnotationDemo />
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Multiline Annotations</h2>
      <MultilineAnnotationDemo />
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Props Annotations</h2>
      <PropsAnnotationDemo /> */}
      <div style={{ height: "3rem" }} />
      <h2 style={{ textAlign: "center" }}>Customization</h2>
      <ExtensionsAnnotationDemo />

      <div style={{ height: "50vh" }} />
    </div>
  )
}

function Title() {
  return (
    <WithBackground
      style={{
        fontSize: "2.8em",
        fontWeight: 800,
        color: "#ddd8",
        textAlign: "center",
        lineHeight: "1.5em",
      }}
      fg={{ color: "#ddd" }}
      blur={30}
    >
      React server component
      <br /> for{" "}
      <span style={{ color: "rgb(255, 203, 107)" }}>syntax highlighting</span>
    </WithBackground>
  )
}

function Details() {
  return (
    <WithBackground fg={{ color: "#ccc" }} bg={{ color: "#ccc2" }} blur={20}>
      <ul
        style={{
          fontSize: "1.45em",
          fontWeight: "600",
          width: "max-content",
          margin: "0 auto",
        }}
      >
        <li>
          <span>Runs on the server. </span>
          <span style={{ color: "rgb(195, 232, 141)" }}>
            No impact on bundle-size.
          </span>
        </li>
        <li>
          <span style={{ color: "rgb(255, 203, 107)" }}>No extra configs.</span>
          <span> Install it, import it, and use it.</span>
        </li>
        <li>
          <span>VS Code's syntax highlighting. </span>
          <span style={{ color: "#fb7fec" }}>All the themes.</span>
        </li>
        <li>
          <span style={{ color: "rgb(137, 221, 255)" }}>Super flexible.</span>
          <span>Extend it as much as you want.</span>
        </li>
      </ul>
      <div style={{ height: "2rem" }} />
      <SocialLinks />
    </WithBackground>
  )
}
