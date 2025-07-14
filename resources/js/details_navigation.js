// Set the base URL based on the current location, listening on navigation changes.
import { BasePattern } from "@patternslib/patternslib/src/core/basepattern";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";
import events from "@patternslib/patternslib/src/core/events";
import logging from "@patternslib/patternslib/src/core/logging";

const log = logging.getLogger("details-navigation");

export const parser = new Parser("details-navigation");
parser.addArgument("breakpoint", 1024);


class Pattern extends BasePattern {
    static name = "details-navigation";
    static trigger = "details.pat-details-navigation";
    static parser = parser;

    init() {
        const mediaquerylist = window.matchMedia(`(min-width: ${this.options.breakpoint}px)`);
        events.add_event_listener(
            mediaquerylist,
            "change",
            "details-navigation-mq",
            (mql) => {
                this.set_details_state(mql);
                log.info(`mediaquery change - window.innerWidth: ${window.innerWidth}`);
            }
        );

        events.add_event_listener(
            window.navigation,
            "navigate",
            "pat-details-navigation--history-changed",
            () => {
                // Only close the nav after navigating on mobile devies.
                if (! mediaquerylist.matches && this.el.hasAttribute("open")) {
                    this.el.removeAttribute("open");
                }
            }
        );

        this.set_details_state(mediaquerylist);
    }

    set_details_state(mql) {
        log.info("set_details_state");
        if (mql.matches && ! this.el.hasAttribute("open")) {
            // Open the details navigation element
            this.el.setAttribute("open", "");
            log.info("    set open");
        } else if (! mql.matches && this.el.hasAttribute("open")) {
            // Close the details navigation element
            this.el.removeAttribute("open");
            log.info("    set closed");
        }
    }
}

registry.register(Pattern);
export default Pattern;
export { Pattern };
