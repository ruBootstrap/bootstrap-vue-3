import{_ as k,o as d,c as r,b as a,w as n,d as o,r as l,a as e,e as s}from"./app.b0905ac2.js";const g={},b=o('<h1 id="badge" tabindex="-1"><a class="header-anchor" href="#badge" aria-hidden="true">#</a> Badge</h1><p>Documentation and examples for badges, our small count and labeling component.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5, badges no longer have focus or hover styles for links</p><h3 id="headings" tabindex="-1"><a class="header-anchor" href="#headings" aria-hidden="true">#</a> Headings</h3>',5),h=s("Example heading "),v=s("New"),m={class:"border-0 pb-0"},_=s("Example heading "),f=s("New"),q=s("Example heading "),y=s("New"),x=s("Example heading "),w=s("New"),N=s("Example heading "),E=s("New"),D=s("Example heading "),S=s("New"),I=o(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Example heading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span><span class="token punctuation">&gt;</span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Example heading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span><span class="token punctuation">&gt;</span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Example heading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span><span class="token punctuation">&gt;</span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>Example heading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span><span class="token punctuation">&gt;</span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span><span class="token punctuation">&gt;</span></span>Example heading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span><span class="token punctuation">&gt;</span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h6</span><span class="token punctuation">&gt;</span></span>Example heading <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span><span class="token punctuation">&gt;</span></span>New<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h6</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h3><p>Badges can be used as part of links or buttons to provide a counter.</p>`,3),B=s(" Notifications "),P=s("4"),C=o(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Notifications <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.</p><p>Unless the context is clear (as with the \u201CNotifications\u201D example, where it is understood that the \u201C4\u201D is the number of notifications), consider including additional context with a visually hidden piece of additional text.</p><h3 id="positioned" tabindex="-1"><a class="header-anchor" href="#positioned" aria-hidden="true">#</a> Positioned</h3><p>Use utilities to modify a <code>.badge</code> and position it in the corner of a link or button.</p>`,5),W=s(" Inbox "),L=s(" 99+ "),U=e("span",{class:"visually-hidden"},"unread messages",-1),V=o(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>position-relative<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Inbox
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">text-indicator</span><span class="token punctuation">&gt;</span></span>
    99+
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visually-hidden<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>unread messages<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also replace the <code>.badge</code> class with a few more utilities without a count for a more generic indicator.</p>`,2),A=s(" Inbox "),z=e("span",{class:"visually-hidden"},"New alerts",-1),O=o(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-button</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>position-relative<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  Inbox
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">dot-indicator</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visually-hidden<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>New alerts<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="background-colors" tabindex="-1"><a class="header-anchor" href="#background-colors" aria-hidden="true">#</a> Background colors</h2><p>Add any of the following variants via the <code>variant</code> prop to change the appearance of a <code>&lt;b-badge&gt;</code>: <code>default</code>, <code>primary</code>, <code>success</code>, <code>warning</code>, <code>info</code>, and <code>danger</code>. If no variant is specified <code>default</code> will be used.</p>`,3),R=s("Primary"),H=s("Secondary"),Q=s("Success"),T=s("Danger"),Y=s("Warning"),j=s("Info"),F=s("Light"),G=s("Dark"),J=o(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Light<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">Conveying meaning to assistive technologies</p><p>Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies \u2013 such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the <code>.visually-hidden</code> class.</p></div><h2 id="pill-badges" tabindex="-1"><a class="header-anchor" href="#pill-badges" aria-hidden="true">#</a> Pill badges</h2><p>Use the <code>pill</code> prop to make badges more rounded with a larger border-radius.</p>`,4),K=s("Primary"),M=s("Secondary"),X=s("Success"),Z=s("Danger"),$=s("Warning"),aa=s("Info"),na=s("Light"),sa=s("Dark"),ta=o(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pill</span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pill</span><span class="token punctuation">&gt;</span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pill</span><span class="token punctuation">&gt;</span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pill</span><span class="token punctuation">&gt;</span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pill</span><span class="token punctuation">&gt;</span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pill</span><span class="token punctuation">&gt;</span></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pill</span><span class="token punctuation">&gt;</span></span>Light<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span> <span class="token attr-name">pill</span><span class="token punctuation">&gt;</span></span>Dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="actionable-badges" tabindex="-1"><a class="header-anchor" href="#actionable-badges" aria-hidden="true">#</a> Actionable badges</h2><p>Quickly provide actionable badges with <s>hover</s> and <s>focus</s> states by specifying either the <code>href</code> prop (links) or <code>to</code> prop (router-links):</p>`,3),pa=s("Primary"),ea=s("Secondary"),oa=s("Success"),ca=s("Danger"),la=s("Warning"),ua=s("Info"),ia=s("Light"),ka=s("Dark"),da=o(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>danger<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>light<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Light<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-badge</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Dark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-badge</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function ra(ga,ba){const t=l("b-badge"),c=l("b-card"),p=l("ClientOnly"),u=l("b-button"),i=l("ComponentReference");return d(),r("div",null,[b,a(p,null,{default:n(()=>[a(c,{class:"mt-2"},{default:n(()=>[e("h1",null,[h,a(t,null,{default:n(()=>[v]),_:1})]),e("h2",m,[_,a(t,null,{default:n(()=>[f]),_:1})]),e("h3",null,[q,a(t,null,{default:n(()=>[y]),_:1})]),e("h4",null,[x,a(t,null,{default:n(()=>[w]),_:1})]),e("h5",null,[N,a(t,null,{default:n(()=>[E]),_:1})]),e("h6",null,[D,a(t,null,{default:n(()=>[S]),_:1})])]),_:1})]),_:1}),I,a(p,null,{default:n(()=>[a(c,null,{default:n(()=>[a(u,{variant:"primary"},{default:n(()=>[B,a(t,{variant:"light"},{default:n(()=>[P]),_:1})]),_:1})]),_:1})]),_:1}),C,a(p,null,{default:n(()=>[a(c,null,{default:n(()=>[a(u,{variant:"primary",class:"position-relative"},{default:n(()=>[W,a(t,{variant:"danger","text-indicator":""},{default:n(()=>[L,U]),_:1})]),_:1})]),_:1})]),_:1}),V,a(p,null,{default:n(()=>[a(c,null,{default:n(()=>[a(u,{variant:"primary",class:"position-relative"},{default:n(()=>[A,a(t,{variant:"danger","dot-indicator":""},{default:n(()=>[z]),_:1})]),_:1})]),_:1})]),_:1}),O,a(p,null,{default:n(()=>[a(c,null,{default:n(()=>[a(t,{variant:"primary"},{default:n(()=>[R]),_:1}),a(t,{variant:"secondary"},{default:n(()=>[H]),_:1}),a(t,{variant:"success"},{default:n(()=>[Q]),_:1}),a(t,{variant:"danger"},{default:n(()=>[T]),_:1}),a(t,{variant:"warning"},{default:n(()=>[Y]),_:1}),a(t,{variant:"info"},{default:n(()=>[j]),_:1}),a(t,{variant:"light"},{default:n(()=>[F]),_:1}),a(t,{variant:"dark"},{default:n(()=>[G]),_:1})]),_:1})]),_:1}),J,a(p,null,{default:n(()=>[a(c,null,{default:n(()=>[a(t,{variant:"primary",pill:""},{default:n(()=>[K]),_:1}),a(t,{variant:"secondary",pill:""},{default:n(()=>[M]),_:1}),a(t,{variant:"success",pill:""},{default:n(()=>[X]),_:1}),a(t,{variant:"danger",pill:""},{default:n(()=>[Z]),_:1}),a(t,{variant:"warning",pill:""},{default:n(()=>[$]),_:1}),a(t,{variant:"info",pill:""},{default:n(()=>[aa]),_:1}),a(t,{variant:"light",pill:""},{default:n(()=>[na]),_:1}),a(t,{variant:"dark",pill:""},{default:n(()=>[sa]),_:1})]),_:1})]),_:1}),ta,a(p,null,{default:n(()=>[a(c,null,{default:n(()=>[a(t,{href:"#",variant:"primary"},{default:n(()=>[pa]),_:1}),a(t,{href:"#",variant:"secondary"},{default:n(()=>[ea]),_:1}),a(t,{href:"#",variant:"success"},{default:n(()=>[oa]),_:1}),a(t,{href:"#",variant:"danger"},{default:n(()=>[ca]),_:1}),a(t,{href:"#",variant:"warning"},{default:n(()=>[la]),_:1}),a(t,{href:"#",variant:"info"},{default:n(()=>[ua]),_:1}),a(t,{href:"#",variant:"light"},{default:n(()=>[ia]),_:1}),a(t,{href:"#",variant:"dark"},{default:n(()=>[ka]),_:1})]),_:1})]),_:1}),da,a(p,null,{default:n(()=>[a(i)]),_:1})])}var va=k(g,[["render",ra],["__file","Badge.html.vue"]]);export{va as default};
