import { Component } from "@angular/core";

@Component({
    selector: "app-footer",
    template: `
        <footer class="mt-auto mb-4">
            <div class="container text-center">
                <small>Copyright &copy; {{ currentYear }} Daniel J Breen. All rights reserved</small>
            </div>
        </footer>
    `
})
export class FooterComponent {
    protected currentYear = new Date().getFullYear();
}
