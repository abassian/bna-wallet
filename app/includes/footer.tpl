<section class="pre-footer">
    <div class="container">
        <p>wallet.abassian.com does not hold your keys for you. We cannot access accounts, recover keys, reset
            passwords, nor reverse transactions. Protect your keys &amp; always check that you are on correct URL. <a
                role="link" tabindex="0" data-toggle="modal" data-target="#disclaimerModal"> You are responsible for
                your security.</a>
        </p>
    </div>
</section>
<footer class="footer {{curNode.type}}" role="content" aria-label="footer">
    <article class="block__wrap" style="max-width: 1780px; margin: auto; background: #11253d; color: #fff;">
        <section class="footer--left">
            <span>&copy; Abassian Utility Blockchain Wallet</span>
        </section>
    </article>
</footer>

@@if (site === 'cew' ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cew" } ) }
@@if (site === 'cx'  ) { @@include( './footer-disclaimer-modal.tpl',   { "site": "cx"  } ) }
