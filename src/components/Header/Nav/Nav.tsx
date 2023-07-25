import { Navbar, Button, Menu } from "react-daisyui";

export default function Nav() {
  return (
    <div className="flex w-full component-preview p-4 pb-40 items-center justify-center gap-2 font-sans">
      <Navbar>
        <div className="flex-1 ">
          <Button color="ghost" className="normal-case text-xl">
            daisyUI
          </Button>
        </div>
        <div className="flex-none">
          <Menu horizontal className="p-0">
            <Menu.Item>
              <a>Item 1</a>
            </Menu.Item>
            <Menu.Item tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <Menu className="p-2 bg-base-100">
                <Menu.Item>
                  <a>Submenu 1</a>
                </Menu.Item>
                <Menu.Item>
                  <a>Submenu 2</a>
                </Menu.Item>
              </Menu>
            </Menu.Item>
            <Menu.Item>
              <a>Item 3</a>
            </Menu.Item>
          </Menu>
        </div>
      </Navbar>
    </div>
  );
}
