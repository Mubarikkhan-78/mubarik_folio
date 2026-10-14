<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep portfolio presentation in shared components with individual TanStack content routes; this keeps navigation and page metadata consistent.
- Keep editable profile data in a shared React context, without persistent browser storage; preview edits are temporary until durable owner-only editing is requested.
- Use uploaded photograph asset pointers rather than bundled photo binaries; this preserves the real supplied image and keeps the repository lightweight.
