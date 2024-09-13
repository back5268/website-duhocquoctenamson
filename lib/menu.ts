export const getMenu = (pathname: string) => {
  return [
    { label: 'Trang chủ', href: '/', active: pathname === '/' },
    {
      label: 'Giới thiệu',
      href: '/gioi-thieu',
      active: pathname === '/gioi-thieu'
    },
    {
      label: 'Du học các nước',
      active: ['/du-hoc-nhat-ban', '/du-hoc-han-quoc'].includes(pathname),
      menu: [
        {
          label: 'Du học Nhật Bản',
          href: '/du-hoc-nhat-ban',
          active: pathname === '/du-hoc-nhat-ban'
        },
        {
          label: 'Du học Hàn Quốc',
          href: '/du-hoc-han-quoc',
          active: pathname === '/du-hoc-han-quoc'
        }
      ]
    },
    {
      label: 'Xuất khẩu lao động',
      active: ['/xuat-khau-nhat-ban', '/xuat-khau-han-quoc', '/xuat-khau-chau-au'].includes(pathname),
      menu: [
        {
          label: 'Nhật Bản',
          href: '/xuat-khau-nhat-ban',
          active: pathname === '/xuat-khau-nhat-ban'
        },
        {
          label: 'Hàn Quốc',
          href: '/xuat-khau-han-quoc',
          active: pathname === '/xuat-khau-han-quoc'
        },
        {
          label: 'Các nước Châu Âu',
          href: '/xuat-khau-chau-au',
          active: pathname === '/xuat-khau-chau-au'
        }
      ]
    },
    {
      label: 'Liên hệ',
      href: '/lien-he',
      active: pathname === '/lien-he'
    }
  ];
};

export const getMenuMobile = (pathname: string) => {
  return [
    { label: 'Trang chủ', href: '/', active: pathname === '/' },
    {
      label: 'Giới thiệu',
      href: '/gioi-thieu',
      active: pathname === '/gioi-thieu'
    },
    {
      label: 'Du học Nhật Bản',
      href: '/du-hoc-nhat-ban',
      active: pathname === '/du-hoc-nhat-ban'
    },
    {
      label: 'Du học Hàn Quốc',
      href: '/du-hoc-han-quoc',
      active: pathname === '/du-hoc-han-quoc'
    },
    {
      label: 'Xuất khẩu Nhật Bản',
      href: '/xuat-khau-nhat-ban',
      active: pathname === '/xuat-khau-nhat-ban'
    },
    {
      label: 'Xuất khẩu Hàn Quốc',
      href: '/xuat-khau-han-quoc',
      active: pathname === '/xuat-khau-han-quoc'
    },
    {
      label: 'Xuất khẩu các nước Châu Âu',
      href: '/xuat-khau-chau-au',
      active: pathname === '/xuat-khau-chau-au'
    },
    {
      label: 'Liên hệ',
      href: '/lien-he',
      active: pathname === '/lien-he'
    }
  ];
};
