<!--BEGIN_BANNER_IMAGE-->

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="/.github/banner_dark.png">
  <source media="(prefers-color-scheme: light)" srcset="/.github/banner_light.png">
  <img style="width:100%;" alt="The LiveKit icon, the name of the repository and some sample code in the background." src="https://raw.githubusercontent.com/livekit/agent-playground/main/.github/banner_light.png">
</picture>

<!--END_BANNER_IMAGE-->

# LiveKit Agents Playground

<!--BEGIN_DESCRIPTION-->
The Agent Playground is designed for quickly prototyping with server side agents built with [LiveKit Agents Framework](https://github.com/livekit/agents). Easily tap into LiveKit WebRTC sessions and process or generate audio, video, and data streams.
  The playground includes components to fully interact with any LiveKit agent, through video, audio and chat.
<!--END_DESCRIPTION-->

## Docs and references

Docs for how to get started with LiveKit agents at [https://docs.livekit.io/agents](https://docs.livekit.io/agents)

The repo containing the (server side) agent implementations (including example agents): [https://github.com/livekit/agents](https://github.com/livekit/agents)

## Try out a live version

You can try out the agents playground at [https://livekit-agent-playground.vercel.app](https://livekit-agent-playground.vercel.app).
This will connect you to our example agent, KITT, which is based off of the [minimal-assistant](https://github.com/livekit/agents/blob/main/examples/voice-pipeline-agent/minimal_assistant.py).

## Setting up the playground locally

1. Install dependencies

```bash
  npm install
```

2. Copy and rename the `.env.example` file to `.env.local` and fill in the necessary environment variables.

```
LIVEKIT_API_KEY=<your API KEY>
LIVEKIT_API_SECRET=<Your API Secret>
NEXT_PUBLIC_LIVEKIT_URL=wss://<Your Cloud URL>
```

3. Run the development server:

```bash
  npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
5. If you haven't done so yet, start your agent (with the same project variables as in step 2.)
6. Connect to a room and see your agent connecting to the playground

## Features

- Render video, audio and chat from your agent
- Send video, audio, or text to your agent
- Configurable settings panel to work with your agent

## Notes

- This playground is currently work in progress. There are known layout/responsive bugs and some features are under tested.
- The playground was tested against the kitt example in `https://github.com/livekit/agents`.
- Feel free to ask questions, request features in our [community slack](https://livekit.io/join-slack).

## Known issues

- Layout can break on smaller screens.
- Mobile device sizes not supported currently

<!--BEGIN_REPO_NAV-->
<br/><table>
<thead><tr><th colspan="2">LiveKit Ecosystem</th></tr></thead>
<tbody>
<tr><td>Realtime SDKs</td><td><a href="https://github.com/livekit/components-js">React Components</a> · <a href="https://github.com/livekit/client-sdk-js">Browser</a> · <a href="https://github.com/livekit/components-swift">Swift Components</a> · <a href="https://github.com/livekit/client-sdk-swift">iOS/macOS/visionOS</a> · <a href="https://github.com/livekit/client-sdk-android">Android</a> · <a href="https://github.com/livekit/client-sdk-flutter">Flutter</a> · <a href="https://github.com/livekit/client-sdk-react-native">React Native</a> · <a href="https://github.com/livekit/rust-sdks">Rust</a> · <a href="https://github.com/livekit/node-sdks">Node.js</a> · <a href="https://github.com/livekit/python-sdks">Python</a> · <a href="https://github.com/livekit/client-sdk-unity-web">Unity (web)</a> · <a href="https://github.com/livekit/client-sdk-unity">Unity (beta)</a></td></tr><tr></tr>
<tr><td>Server APIs</td><td><a href="https://github.com/livekit/node-sdks">Node.js</a> · <a href="https://github.com/livekit/server-sdk-go">Golang</a> · <a href="https://github.com/livekit/server-sdk-ruby">Ruby</a> · <a href="https://github.com/livekit/server-sdk-kotlin">Java/Kotlin</a> · <a href="https://github.com/livekit/python-sdks">Python</a> · <a href="https://github.com/livekit/rust-sdks">Rust</a> · <a href="https://github.com/agence104/livekit-server-sdk-php">PHP (community)</a></td></tr><tr></tr>
<tr><td>Agents Frameworks</td><td><a href="https://github.com/livekit/agents">Python</a> · <b>Playground</b></td></tr><tr></tr>
<tr><td>Services</td><td><a href="https://github.com/livekit/livekit">LiveKit server</a> · <a href="https://github.com/livekit/egress">Egress</a> · <a href="https://github.com/livekit/ingress">Ingress</a> · <a href="https://github.com/livekit/sip">SIP</a></td></tr><tr></tr>
<tr><td>Resources</td><td><a href="https://docs.livekit.io">Docs</a> · <a href="https://github.com/livekit-examples">Example apps</a> · <a href="https://livekit.io/cloud">Cloud</a> · <a href="https://docs.livekit.io/home/self-hosting/deployment">Self-hosting</a> · <a href="https://github.com/livekit/livekit-cli">CLI</a></td></tr>
</tbody>
</table>
<!--END_REPO_NAV-->


```
app.autobot-live
├─ .eslintrc.json
├─ .git
│  ├─ config
│  ├─ description
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ HEAD
│  ├─ objects
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-ea58ccebea4d1a664d3f146b072807ae3dd5e2e3.idx
│  │     └─ pack-ea58ccebea4d1a664d3f146b072807ae3dd5e2e3.pack
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ HEAD
│     └─ tags
├─ .github
│  ├─ banner_dark.png
│  ├─ banner_light.png
│  └─ ISSUE_TEMPLATE
│     ├─ bug_report.yaml
│     ├─ config.yml
│     └─ feature_request.yaml
├─ .gitignore
├─ LICENSE
├─ next.config.js
├─ NOTICE
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ logo.svg
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ renovate.json
├─ src
│  ├─ assets
│  │  ├─ .gitkeep
│  │  ├─ audioFiles
│  │  │  └─ Summer Solstice on the June Planet - Bail Bonds.mp3
│  │  ├─ fonts
│  │  │  └─ inter
│  │  │     ├─ Inter-italic.var.woff2
│  │  │     ├─ Inter-roman.var.woff2
│  │  │     └─ inter.css
│  │  ├─ i18n
│  │  │  ├─ en.json
│  │  │  └─ tr.json
│  │  ├─ icons
│  │  │  ├─ feather.svg
│  │  │  ├─ heroicons-outline.svg
│  │  │  ├─ heroicons-solid.svg
│  │  │  ├─ icons8-menu-rounded-24.png
│  │  │  ├─ material-outline.svg
│  │  │  ├─ material-solid.svg
│  │  │  └─ material-twotone.svg
│  │  ├─ images
│  │  │  ├─ apps
│  │  │  │  ├─ contacts
│  │  │  │  │  └─ flags.png
│  │  │  │  ├─ ecommerce
│  │  │  │  │  └─ products
│  │  │  │  │     ├─ watch-01-01.jpg
│  │  │  │  │     ├─ watch-01-02.jpg
│  │  │  │  │     ├─ watch-01-03.jpg
│  │  │  │  │     ├─ watch-01-thumb.jpg
│  │  │  │  │     ├─ watch-02-01.jpg
│  │  │  │  │     ├─ watch-02-02.jpg
│  │  │  │  │     ├─ watch-02-03.jpg
│  │  │  │  │     ├─ watch-02-thumb.jpg
│  │  │  │  │     ├─ watch-03-01.jpg
│  │  │  │  │     ├─ watch-03-02.jpg
│  │  │  │  │     ├─ watch-03-03.jpg
│  │  │  │  │     ├─ watch-03-thumb.jpg
│  │  │  │  │     ├─ watch-04-01.jpg
│  │  │  │  │     ├─ watch-04-02.jpg
│  │  │  │  │     ├─ watch-04-03.jpg
│  │  │  │  │     ├─ watch-04-thumb.jpg
│  │  │  │  │     ├─ watch-05-01.jpg
│  │  │  │  │     ├─ watch-05-02.jpg
│  │  │  │  │     ├─ watch-05-03.jpg
│  │  │  │  │     ├─ watch-05-thumb.jpg
│  │  │  │  │     ├─ watch-06-01.jpg
│  │  │  │  │     ├─ watch-06-02.jpg
│  │  │  │  │     ├─ watch-06-03.jpg
│  │  │  │  │     ├─ watch-06-thumb.jpg
│  │  │  │  │     ├─ watch-07-01.jpg
│  │  │  │  │     ├─ watch-07-02.jpg
│  │  │  │  │     ├─ watch-07-03.jpg
│  │  │  │  │     ├─ watch-07-thumb.jpg
│  │  │  │  │     ├─ watch-08-01.jpg
│  │  │  │  │     ├─ watch-08-02.jpg
│  │  │  │  │     ├─ watch-08-03.jpg
│  │  │  │  │     ├─ watch-08-thumb.jpg
│  │  │  │  │     ├─ watch-09-01.jpg
│  │  │  │  │     ├─ watch-09-02.jpg
│  │  │  │  │     ├─ watch-09-03.jpg
│  │  │  │  │     ├─ watch-09-thumb.jpg
│  │  │  │  │     ├─ watch-10-01.jpg
│  │  │  │  │     ├─ watch-10-02.jpg
│  │  │  │  │     ├─ watch-10-03.jpg
│  │  │  │  │     ├─ watch-10-thumb.jpg
│  │  │  │  │     ├─ watch-11-01.jpg
│  │  │  │  │     ├─ watch-11-02.jpg
│  │  │  │  │     ├─ watch-11-03.jpg
│  │  │  │  │     ├─ watch-11-thumb.jpg
│  │  │  │  │     ├─ watch-12-01.jpg
│  │  │  │  │     ├─ watch-12-02.jpg
│  │  │  │  │     ├─ watch-12-03.jpg
│  │  │  │  │     ├─ watch-12-thumb.jpg
│  │  │  │  │     ├─ watch-13-01.jpg
│  │  │  │  │     ├─ watch-13-02.jpg
│  │  │  │  │     ├─ watch-13-03.jpg
│  │  │  │  │     ├─ watch-13-thumb.jpg
│  │  │  │  │     ├─ watch-14-01.jpg
│  │  │  │  │     ├─ watch-14-02.jpg
│  │  │  │  │     ├─ watch-14-03.jpg
│  │  │  │  │     ├─ watch-14-thumb.jpg
│  │  │  │  │     ├─ watch-15-01.jpg
│  │  │  │  │     ├─ watch-15-02.jpg
│  │  │  │  │     ├─ watch-15-03.jpg
│  │  │  │  │     ├─ watch-15-thumb.jpg
│  │  │  │  │     ├─ watch-16-01.jpg
│  │  │  │  │     ├─ watch-16-02.jpg
│  │  │  │  │     ├─ watch-16-03.jpg
│  │  │  │  │     ├─ watch-16-thumb.jpg
│  │  │  │  │     ├─ watch-17-01.jpg
│  │  │  │  │     ├─ watch-17-02.jpg
│  │  │  │  │     ├─ watch-17-03.jpg
│  │  │  │  │     ├─ watch-17-thumb.jpg
│  │  │  │  │     ├─ watch-18-01.jpg
│  │  │  │  │     ├─ watch-18-02.jpg
│  │  │  │  │     ├─ watch-18-03.jpg
│  │  │  │  │     ├─ watch-18-thumb.jpg
│  │  │  │  │     ├─ watch-19-01.jpg
│  │  │  │  │     ├─ watch-19-02.jpg
│  │  │  │  │     ├─ watch-19-03.jpg
│  │  │  │  │     ├─ watch-19-thumb.jpg
│  │  │  │  │     ├─ watch-20-01.jpg
│  │  │  │  │     ├─ watch-20-02.jpg
│  │  │  │  │     ├─ watch-20-03.jpg
│  │  │  │  │     ├─ watch-20-thumb.jpg
│  │  │  │  │     ├─ watch-21-01.jpg
│  │  │  │  │     ├─ watch-21-02.jpg
│  │  │  │  │     ├─ watch-21-03.jpg
│  │  │  │  │     ├─ watch-21-thumb.jpg
│  │  │  │  │     ├─ watch-22-01.jpg
│  │  │  │  │     ├─ watch-22-02.jpg
│  │  │  │  │     ├─ watch-22-03.jpg
│  │  │  │  │     ├─ watch-22-thumb.jpg
│  │  │  │  │     ├─ watch-23-01.jpg
│  │  │  │  │     ├─ watch-23-02.jpg
│  │  │  │  │     ├─ watch-23-03.jpg
│  │  │  │  │     └─ watch-23-thumb.jpg
│  │  │  │  └─ mailbox
│  │  │  │     ├─ birds-eye-sydney_preview.jpg
│  │  │  │     ├─ lake-of-carrezza_preview.png
│  │  │  │     ├─ mystery-forest_preview.jpg
│  │  │  │     └─ yosemite-national-park_preview.png
│  │  │  ├─ avatars
│  │  │  │  ├─ brian-hughes.jpg
│  │  │  │  ├─ female-01.jpg
│  │  │  │  ├─ female-02.jpg
│  │  │  │  ├─ female-03.jpg
│  │  │  │  ├─ female-04.jpg
│  │  │  │  ├─ female-05.jpg
│  │  │  │  ├─ female-06.jpg
│  │  │  │  ├─ female-07.jpg
│  │  │  │  ├─ female-08.jpg
│  │  │  │  ├─ female-09.jpg
│  │  │  │  ├─ female-10.jpg
│  │  │  │  ├─ female-11.jpg
│  │  │  │  ├─ female-12.jpg
│  │  │  │  ├─ female-13.jpg
│  │  │  │  ├─ female-14.jpg
│  │  │  │  ├─ female-15.jpg
│  │  │  │  ├─ female-16.jpg
│  │  │  │  ├─ female-17.jpg
│  │  │  │  ├─ female-18.jpg
│  │  │  │  ├─ female-19.jpg
│  │  │  │  ├─ female-20.jpg
│  │  │  │  ├─ male-01.jpg
│  │  │  │  ├─ male-02.jpg
│  │  │  │  ├─ male-03.jpg
│  │  │  │  ├─ male-04.jpg
│  │  │  │  ├─ male-05.jpg
│  │  │  │  ├─ male-06.jpg
│  │  │  │  ├─ male-07.jpg
│  │  │  │  ├─ male-08.jpg
│  │  │  │  ├─ male-09.jpg
│  │  │  │  ├─ male-10.jpg
│  │  │  │  ├─ male-11.jpg
│  │  │  │  ├─ male-12.jpg
│  │  │  │  ├─ male-13.jpg
│  │  │  │  ├─ male-14.jpg
│  │  │  │  ├─ male-15.jpg
│  │  │  │  ├─ male-16.jpg
│  │  │  │  ├─ male-17.jpg
│  │  │  │  ├─ male-18.jpg
│  │  │  │  ├─ male-19.jpg
│  │  │  │  └─ male-20.jpg
│  │  │  ├─ cards
│  │  │  │  ├─ 01-320x200.jpg
│  │  │  │  ├─ 02-320x200.jpg
│  │  │  │  ├─ 03-320x200.jpg
│  │  │  │  ├─ 04-320x200.jpg
│  │  │  │  ├─ 05-320x200.jpg
│  │  │  │  ├─ 06-320x200.jpg
│  │  │  │  ├─ 07-320x200.jpg
│  │  │  │  ├─ 08-320x200.jpg
│  │  │  │  ├─ 09-320x200.jpg
│  │  │  │  ├─ 10-320x200.jpg
│  │  │  │  ├─ 11-512x512.jpg
│  │  │  │  ├─ 12-512x512.jpg
│  │  │  │  ├─ 13-160x160.jpg
│  │  │  │  ├─ 14-640x480.jpg
│  │  │  │  ├─ 15-640x480.jpg
│  │  │  │  ├─ 16-640x480.jpg
│  │  │  │  ├─ 17-640x480.jpg
│  │  │  │  ├─ 18-640x480.jpg
│  │  │  │  ├─ 19-640x480.jpg
│  │  │  │  ├─ 20-640x480.jpg
│  │  │  │  ├─ 21-640x480.jpg
│  │  │  │  ├─ 22-640x480.jpg
│  │  │  │  ├─ 23-640x480.jpg
│  │  │  │  ├─ 24-640x480.jpg
│  │  │  │  ├─ 25-640x480.jpg
│  │  │  │  ├─ 26-640x480.jpg
│  │  │  │  ├─ 27-640x480.jpg
│  │  │  │  ├─ 28-640x480.jpg
│  │  │  │  ├─ 29-640x480.jpg
│  │  │  │  ├─ 30-640x480.jpg
│  │  │  │  ├─ 31-640x480.jpg
│  │  │  │  ├─ 32-640x480.jpg
│  │  │  │  ├─ 33-640x480.jpg
│  │  │  │  ├─ 34-640x480.jpg
│  │  │  │  ├─ 35-640x480.jpg
│  │  │  │  ├─ 36-640x480.jpg
│  │  │  │  ├─ avatar-400x400.jpg
│  │  │  │  ├─ coffee-shop-01-320x200.jpg
│  │  │  │  ├─ coffee-shop-02-512x512.jpg
│  │  │  │  ├─ coffee-shop-03-320x320.jpg
│  │  │  │  ├─ mansion-01-320x200.jpg
│  │  │  │  ├─ product-01-224x256.jpg
│  │  │  │  ├─ sneakers-01-320x200.jpg
│  │  │  │  ├─ sneakers-02-448x560.jpg
│  │  │  │  └─ sneakers-03-448x560.jpg
│  │  │  ├─ flags
│  │  │  │  ├─ TR.svg
│  │  │  │  ├─ US.svg
│  │  │  │  └─ where-to-find-other-flags.txt
│  │  │  ├─ logo
│  │  │  │  ├─ logo-text-on-dark.svg
│  │  │  │  ├─ logo-text.svg
│  │  │  │  └─ logo.svg
│  │  │  ├─ pages
│  │  │  │  ├─ help-center
│  │  │  │  │  └─ image-1.jpg
│  │  │  │  └─ profile
│  │  │  │     └─ cover.jpg
│  │  │  └─ ui
│  │  │     └─ angular-material
│  │  │        └─ scenes
│  │  │           ├─ autocomplete.scene.png
│  │  │           ├─ badge.scene.png
│  │  │           ├─ bottom-sheet.scene.png
│  │  │           ├─ button-toggle.scene.png
│  │  │           ├─ button.scene.png
│  │  │           ├─ card.scene.png
│  │  │           ├─ checkbox.scene.png
│  │  │           ├─ chips.scene.png
│  │  │           ├─ core.scene.png
│  │  │           ├─ datepicker.scene.png
│  │  │           ├─ dialog.scene.png
│  │  │           ├─ divider.scene.png
│  │  │           ├─ expansion.scene.png
│  │  │           ├─ form-field.scene.png
│  │  │           ├─ grid-list.scene.png
│  │  │           ├─ icon.scene.png
│  │  │           ├─ input.scene.png
│  │  │           ├─ list.scene.png
│  │  │           ├─ menu.scene.png
│  │  │           ├─ paginator.scene.png
│  │  │           ├─ progress-bar.scene.png
│  │  │           ├─ progress-spinner.scene.png
│  │  │           ├─ radio.scene.png
│  │  │           ├─ ripple.scene.png
│  │  │           ├─ select.scene.png
│  │  │           ├─ sidenav.scene.png
│  │  │           ├─ slide-toggle.scene.png
│  │  │           ├─ slider.scene.png
│  │  │           ├─ snack-bar.scene.png
│  │  │           ├─ sort.scene.png
│  │  │           ├─ stepper.scene.png
│  │  │           ├─ table.scene.png
│  │  │           ├─ tabs.scene.png
│  │  │           ├─ toolbar.scene.png
│  │  │           ├─ tooltip.scene.png
│  │  │           └─ tree.scene.png
│  │  └─ styles
│  │     └─ splash-screen.css
│  ├─ auth
│  ├─ cloud
│  │  ├─ CloudConnect.tsx
│  │  ├─ README.md
│  │  └─ useCloud.tsx
│  ├─ components
│  │  ├─ button
│  │  │  ├─ Button.tsx
│  │  │  └─ LoadingSVG.tsx
│  │  ├─ chat
│  │  │  ├─ ChatMessage.tsx
│  │  │  ├─ ChatMessageInput.tsx
│  │  │  └─ ChatTile.tsx
│  │  ├─ colorPicker
│  │  │  └─ ColorPicker.tsx
│  │  ├─ config
│  │  │  ├─ AudioInputTile.tsx
│  │  │  ├─ ConfigurationPanelItem.tsx
│  │  │  └─ NameValueRow.tsx
│  │  ├─ playground
│  │  │  ├─ icons.tsx
│  │  │  ├─ Playground.tsx
│  │  │  ├─ PlaygroundDeviceSelector.tsx
│  │  │  ├─ PlaygroundHeader.tsx
│  │  │  ├─ PlaygroundTile.tsx
│  │  │  └─ SettingsDropdown.tsx
│  │  ├─ PlaygroundConnect.tsx
│  │  └─ toast
│  │     ├─ PlaygroundToast.tsx
│  │     └─ ToasterProvider.tsx
│  ├─ hooks
│  │  ├─ useConfig.tsx
│  │  ├─ useConnection.tsx
│  │  ├─ useTrackVolume.tsx
│  │  └─ useWindowResize.ts
│  ├─ lib
│  │  ├─ tailwindTheme.preval.ts
│  │  ├─ types.ts
│  │  └─ util.ts
│  ├─ pages
│  │  ├─ api
│  │  │  └─ token.ts
│  │  ├─ index.tsx
│  │  ├─ login.tsx
│  │  ├─ _app.tsx
│  │  └─ _document.tsx
│  ├─ styles
│  │  └─ globals.css
│  └─ transcriptions
│     └─ TranscriptionTile.tsx
├─ tailwind.config.js
└─ tsconfig.json

```