import * as React from "react"

import { LinkListGroup, LinkListItem, LinkItem } from "./navigation.styles"

const NavigationLinkList = ({ linkData, listtype }) => {
  return (
    <>
      {linkData.length > 0 ? (
        <LinkListGroup>
          {linkData.map(link => (
            <LinkListItem key={link.id}>
              <LinkItem
                to={`/${link.slug}`}
                activeClassName="linkItemActive"
                listtype={listtype}
              >
                {link.articleTitle}
              </LinkItem>
            </LinkListItem>
          ))}
        </LinkListGroup>
      ) : (
        <LinkListGroup>
          <LinkListItem>
            <em>
              <small>Articles are coming soon</small>
            </em>
          </LinkListItem>
        </LinkListGroup>
      )}
    </>
  )
}

export default NavigationLinkList
