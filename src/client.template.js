window.__ModuleLoader__.load({
  id: __ID__,
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;

    var React = require("react");

    /**
     * The theme service (palette overrides) plus the slot registry used for the
     * small "about this theme" card in Settings -> General.
     */
    var inject = ["theme", "slots"];

    var CSS = __CSS__;
    var TOKENS = __TOKENS__;

    /** A quiet Settings-page easter egg; the pink-shy card lives here. */
    function OrbitStageAbout() {
      return React.createElement(
        "div",
        { className: "orbit-stage-about" },
        React.createElement(
          "div",
          { className: "orbit-stage-about-copy" },
          React.createElement("div", { className: "orbit-stage-about-kicker" }, "ORBIT STAGE / 星环剧场"),
          React.createElement("div", { className: "orbit-stage-about-title" }, "伊凡 · 010310"),
          React.createElement("div", { className: "orbit-stage-about-meta" }, "ANNAT GARDEN 50TH · FAN-MADE THEME"),
          React.createElement(
            "p",
            { className: "orbit-stage-about-note" },
            "把舞台灯关小一点，让代码亮着。禁用 orbit-stage 即可回到默认外观。"
          )
        ),
        React.createElement("div", { className: "orbit-stage-about-art", "aria-hidden": "true" })
      );
    }

    /**
     * Inline ornaments for the home composer: a crimson satin bow sticker with
     * lace tails perched on the top-left corner, a stage microphone on the
     * bottom-right, a lace trim of little hearts and angel wings, and one fang
     * biting the border. The stickers are sized from the free space around the
     * card so they never spill out of the scroll area.
     */

    /**
     * The fang grows out of the top border: its wide base sits on the edge and
     * the tip hangs just inside the composer, so it looks like the box is biting.
     */
    var FANG_SVG =
      '<svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M5 8c10 4 24 4 33 0" stroke="#e98ba3" stroke-width="2.2" stroke-linecap="round"/>' +
      '<path d="M10 10c1 12 4 23 9 31 5-8 9-19 10-31Z" fill="#fff0f5" stroke="#b81c31" stroke-width="1.6"/>' +
      '<path d="M13 13c1 10 3 18 6 25" stroke="#f1cfd7" stroke-width="1.2"/>' +
      '<path d="M35 5l1.2 2.9 2.9 1.2-2.9 1.2-1.2 2.9-1.2-2.9-2.9-1.2 2.9-1.2Z" fill="#ffdce5" opacity=".8"/>' +
      "</svg>";

    /**
     * Tiny corner sparkles: a star, a crimson bow and a macaron heart cluster
     * at the free top-left and bottom-right corners of every bubble.
     */
    function svgIcon(cls, body) {
      return (
        '<svg class="os-spk ' + cls + '" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        body +
        "</svg>"
      );
    }
    var SPARKLE_STAR =
      '<path class="os-spk-star" d="M12 2.6l2.47 5.73 6.13.55-4.66 4.02 1.42 5.99L12 15.9l-5.36 3 1.42-5.99L3.4 8.88l6.13-.55z"/>';
    var SPARKLE_BOW =
      '<path class="os-spk-bow" d="M10.5 12L3 7.2C1.7 6.4 1 7.3 1 9.6v4.8c0 2.3.7 3.2 2 2.4l7.5-4.8z"/>' +
      '<path class="os-spk-bow" d="M13.5 12L21 7.2c1.3-.8 2 .1 2 2.4v4.8c0 2.3-.7 3.2-2 2.4l-7.5-4.8z"/>' +
      '<rect class="os-spk-bow-knot" x="10.4" y="9" width="3.2" height="6" rx="1.3"/>';
    var SPARKLE_HEART =
      '<path class="os-spk-heart" d="M12 20.4S4 15.4 4 9.8C4 6.8 5.9 5 8 5c1.5 0 2.9.8 4 2.3C13.1 5.8 14.5 5 16 5c2.1 0 4 1.8 4 4.8 0 5.6-8 10.6-8 10.6z"/>';
    var SPARKLES_HTML =
      // top-left cluster
      svgIcon("os-spk-tl-bow", SPARKLE_BOW) +
      svgIcon("os-spk-tl-star", SPARKLE_STAR) +
      svgIcon("os-spk-tl-heart", SPARKLE_HEART) +
      // bottom-right cluster
      svgIcon("os-spk-br-bow", SPARKLE_BOW) +
      svgIcon("os-spk-br-heart", SPARKLE_HEART) +
      svgIcon("os-spk-br-star", SPARKLE_STAR);

    /** Lace motifs: a tiny heart (SVG) and the wing cut from the supplied art. */
    var HEART_LACE =
      '<path d="M6 9.4C3.1 7.1 1.1 5.4 1.1 3.5 1.1 1.9 2.3 1 3.8 1c.9 0 1.7.5 2.2 1.3.5-.8 1.3-1.3 2.2-1.3 1.6 0 2.8 1.1 2.8 2.6 0 1.8-2 3.6-5 5.8Z" fill="none" stroke="#ffc2d6" stroke-width="1.1" stroke-linejoin="round"/>';
    var WING_TILE_H = __WING_TILE_H__;
    var WING_TILE_V = __WING_TILE_V__;

    function laceTile(width, height, body) {
      return (
        "data:image/svg+xml," +
        encodeURIComponent(
          '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + " " + height + '">' +
            body +
            "</svg>"
        )
      );
    }

    var TRIM_HEART_H = laceTile(
      28,
      13,
      '<g transform="translate(2 1.7)">' + HEART_LACE + "</g>"
    );
    var TRIM_HEART_V = laceTile(
      13,
      28,
      '<g transform="translate(.9 1.4) scale(.92)">' + HEART_LACE + "</g>"
    );

    var DECO_INSET = 14;
    // Supplied lace-corner artwork, cropped tight. The fractions below were
    // measured from the PNG: where the straight lace band starts vertically,
    // and where the hanging tail ends horizontally.
    var BOW_TL_ASPECT = 672 / 560;
    var BOW_TAIL_RIGHT = 0.265;
    var BOW_BAND_TOP = 0.116;
    // Nudge the whole ribbon slightly inwards so the tails sit across the left
    // border instead of hanging entirely outside it.
    var BOW_SHIFT_X = 10;
    var NOTES_ASPECT = 640 / 247;

    /**
     * The card is centred, so the free margin beside it swings from ~16px to
     * several hundred px. Size each corner sticker from that live margin: it
     * hugs the corner, stays inside the scroll area, and never covers the
     * workspace hint row above the card or the placeholder text inside it.
     */
    function layoutCornerDecor(deco, card) {
      var hero = card.closest('[class*="an3WzG_root"]');
      if (!hero) return;
      var box = hero.getBoundingClientRect();
      var frame = card.getBoundingClientRect();
      var tl = deco.querySelector(".orbit-stage-deco-bow-tl");
      var notes = deco.querySelector(".orbit-stage-deco-notes");
      if (!tl || !notes) return;

      var leftRoom = frame.left - box.left;
      // Small corner ribbon pinned to the border, not floating beside it: the
      // lace band starts on the top border and the tails end exactly on the
      // left border, so no daylight shows between artwork and card.
      var tlWidth = Math.max(118, Math.min(140, leftRoom + 74));
      var tlHeight = Math.round(tlWidth / BOW_TL_ASPECT);
      tl.style.width = tlWidth + "px";
      tl.style.height = tlHeight + "px";
      tl.style.left = DECO_INSET - BOW_TAIL_RIGHT * tlWidth + BOW_SHIFT_X + "px";
      tl.style.top = DECO_INSET + 1 - BOW_BAND_TOP * tlHeight + "px";

      var rightRoom = box.right - frame.right;
      var notesWidth = Math.max(104, Math.min(156, rightRoom + 46));
      var notesHeight = Math.round(notesWidth / NOTES_ASPECT);
      notes.style.width = notesWidth + "px";
      notes.style.height = notesHeight + "px";
      // The staff is laid along the bottom border and only slightly overhangs
      // the right edge, so it reads as part of the box corner.
      notes.style.right = "8px";
      notes.style.bottom = 18 - notesHeight + "px";
    }

    /** Attach the corner sparkles to every message bubble. */
    function ensureBubbleSparkles() {
      document.querySelectorAll("[data-message-bubble]").forEach(function (bubble) {
        if (bubble.querySelector(":scope > .orbit-stage-bubble-sparkles")) return;
        var sparkles = document.createElement("span");
        sparkles.className = "orbit-stage-bubble-sparkles";
        sparkles.setAttribute("aria-hidden", "true");
        sparkles.innerHTML = SPARKLES_HTML;
        bubble.appendChild(sparkles);
      });
    }

    /** Layer the faint Ivan wallpaper behind the sidebar content. */
    function ensureSidebarArt() {
      document.querySelectorAll('[class*="mP3x-q_sidebarCol"]').forEach(function (sidebar) {
        if (sidebar.querySelector(":scope > .orbit-stage-sidebar-art")) return;
        var art = document.createElement("span");
        art.className = "orbit-stage-sidebar-art";
        art.setAttribute("aria-hidden", "true");
        var img = document.createElement("span");
        img.className = "orbit-stage-sidebar-art-img";
        var scrim = document.createElement("span");
        scrim.className = "orbit-stage-sidebar-art-scrim";
        art.appendChild(img);
        art.appendChild(scrim);
        sidebar.appendChild(art);
      });
    }

    function mountComposerDecor() {
      var scheduled = false;

      var ensure = function () {
        scheduled = false;
        ensureBubbleSparkles();
        ensureSidebarArt();
        var hero = document.querySelector('[class*="an3WzG_root"][data-phase="hero"]');
        var card = hero && hero.querySelector('[class*="GRgSLq_card"]');
        if (!card) return;
        var existing = card.querySelector(":scope > .orbit-stage-deco");
        if (existing) {
          layoutCornerDecor(existing, card);
          return;
        }

        var deco = document.createElement("div");
        deco.className = "orbit-stage-deco";
        deco.setAttribute("aria-hidden", "true");
        deco.innerHTML =
          '<span class="orbit-stage-deco-orbit"></span>' +
          '<span class="orbit-stage-deco-trim orbit-stage-deco-trim-top"></span>' +
          '<span class="orbit-stage-deco-trim orbit-stage-deco-trim-bottom"></span>' +
          '<span class="orbit-stage-deco-trim orbit-stage-deco-trim-left"></span>' +
          '<span class="orbit-stage-deco-trim orbit-stage-deco-trim-right"></span>' +
          '<span class="orbit-stage-deco-bow orbit-stage-deco-bow-tl"></span>' +
          '<span class="orbit-stage-deco-notes"></span>' +
          '<span class="orbit-stage-deco-fang">' +
          FANG_SVG +
          "</span>" +
          '<span class="orbit-stage-deco-float orbit-stage-deco-float-a">\u2665</span>' +
          '<span class="orbit-stage-deco-float orbit-stage-deco-float-b">\u2665</span>';

        // Two layers: hearts are an SVG tile, the wings come from the supplied art.
        deco.querySelectorAll(".orbit-stage-deco-trim-top, .orbit-stage-deco-trim-bottom").forEach(function (el) {
          el.style.backgroundImage =
            'url("' + TRIM_HEART_H + '"), url("' + WING_TILE_H + '")';
        });
        deco.querySelectorAll(".orbit-stage-deco-trim-left, .orbit-stage-deco-trim-right").forEach(function (el) {
          el.style.backgroundImage =
            'url("' + TRIM_HEART_V + '"), url("' + WING_TILE_V + '")';
        });

        card.appendChild(deco);
        layoutCornerDecor(deco, card);
      };

      // The hero card can be remounted by the host; keep the ornaments attached.
      var observer = new MutationObserver(function () {
        if (scheduled) return;
        scheduled = true;
        window.requestAnimationFrame(ensure);
      });
      observer.observe(document.body, { childList: true, subtree: true });
      ensure();

      window.addEventListener("resize", ensure);

      return function () {
        observer.disconnect();
        window.removeEventListener("resize", ensure);
        document.querySelectorAll(".orbit-stage-deco").forEach(function (n) {
          n.remove();
        });
        document.querySelectorAll(".orbit-stage-bubble-sparkles, .orbit-stage-sidebar-art").forEach(function (n) {
          n.remove();
        });
      };
    }

    function apply(ctx) {
      // HMR-safe: clear a previous instance before mounting this one.
      document.getElementById("orbit-stage-bg")?.remove();
      document.getElementById("orbit-stage-style")?.remove();
      document.querySelectorAll(".orbit-stage-deco").forEach(function (n) {
        n.remove();
      });
      document.querySelectorAll(".orbit-stage-bubble-sparkles, .orbit-stage-sidebar-art").forEach(function (n) {
        n.remove();
      });

      var bg = document.createElement("div");
      bg.id = "orbit-stage-bg";
      bg.setAttribute("aria-hidden", "true");
      document.body.prepend(bg);

      var style = document.createElement("style");
      style.id = "orbit-stage-style";
      style.textContent = CSS;
      document.head.appendChild(style);

      var disposeTokens = ctx.theme.overrideTokens("dsh-theme-orbit-stage", TOKENS);
      var stopDecor = mountComposerDecor();

      // A theme flip rewrites variables; moving the sheet last keeps our
      // surface rules above the base styles without !important on everything.
      var keepLast = function () {
        document.head.appendChild(style);
      };

      ctx.effect(function () {
        ctx.on("theme/change", keepLast);
        return function () {
          stopDecor();
          disposeTokens();
          bg.remove();
          style.remove();
        };
      }, "orbit-stage: visual layer");

      ctx.slots.inject("settings.general.item", function () {
        return ctx.slots.register(
          { name: "settings.general.item", id: "orbit-stage-about", order: 90 },
          OrbitStageAbout
        );
      });
    }

    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
