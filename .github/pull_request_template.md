# Pull Request

A checklist for change class, behavior and safeguards.

## What this changes

<!-- One or two sentences on what changes and why. -->

## Class

* [ ] **Refactor:** site code changes, behavior does not. The tests pass; tests change only to follow renamed or moved code.
* [ ] **Bug Fix:** site code is brought back in line with existing behavior. Which test failed before the fix?
* [ ] **Intentional Change:** behavior is added, changed or removed. Which tests now check it?
* [ ] **Clarification:** docs or comments now describe behavior the site already has. Which tests check it?
* [ ] **No Class Needed:** no site code (`pages/` and `components/`) changes. The review questions still apply.

## Review questions

* **Behavior:** does this change what visitors see or do? If so, which tests changed in the same commit?
* **Protection:** does this loosen, remove or move a runtime check, or a test that proves one works? If so, what replaces it, or which test proves the same input still gets the same outcome at the same boundary?
* **Gates:** does this lower or remove the existing build and behavior-test workflow? That is not allowed.
* **Description:** is any new behavior covered by a test? Behavior that isn't has no guarantee.
